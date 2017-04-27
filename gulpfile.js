'use strict';

const fs = require('fs'),
  del = require('del'),
  path = require('path'),
  gulp = require('gulp'),
  iF = require('gulp-if'),
  less = require('gulp-less'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  cssmin = require('gulp-cssmin'),
  tslint = require('gulp-tslint'),
  tsc = require('gulp-typescript'),
  replace = require('gulp-replace'),
  jsMinify = require('gulp-uglify'),
  ghPages = require('gulp-gh-pages'),
  tsconfig = require('gulp-ts-config'),
  coveralls = require('gulp-coveralls'),
  sourcemaps = require('gulp-sourcemaps'),
  cssPrefixer = require('gulp-autoprefixer'),
  merge = require('merge-stream');

const SystemBuilder = require('systemjs-builder');
const tsProject = tsc.createProject('tsconfig.json');
const buildDir = 'dist';

var NG2ENV = process.env.NG2ENV || 'Dev';
var build = false;
process.argv.forEach(function(val, index, array) {
  if ('build' === val) {
    build = true;
    // NG2ENV = 'Prod';
  }
});

gulp.task('coveralls', () => {
  return gulp.src('coverage/lcov.info')
    .pipe(coveralls());
});

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
  return del([buildDir, '.tmp'], cb);
});

/**
 * Deploy to Github Page.
 */
gulp.task('ghpage', function() {
  return gulp.src('./' + buildDir + '/**/*')
    .pipe(ghPages());
});

/**
 * Compile all Less files.
 */
gulp.task('less', () => {
  return gulp
    .src('src/less/app.less')
    .pipe(less())
    .pipe(cssPrefixer())
    .pipe(iF(build, cssmin()))
    .pipe(gulp.dest(path.join(buildDir, 'css')));
});



gulp.task('images', () => {
  return gulp.src('src/img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest(path.join(buildDir, "img")));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () => {
  return gulp.src(["!src/index.html", '!src/less', '!src/less/**/*', '!**/*.ts', 'src/**/*'])
    .pipe(gulp.dest(buildDir));
});

/**
 * Copy all required fonts into build directory.
 */
gulp.task('fonts', () => {
  return gulp.src([
      'bootstrap/fonts/**',
      'font-awesome/fonts/**',
      'simple-line-icons/fonts/**'
    ], { cwd: 'node_modules' })
    .pipe(gulp.dest(path.join(buildDir, 'fonts')));
});
/**
 * Copy flags into build directory.
 */
gulp.task('flags', () => {
  return gulp.src([
      'flag-icon-css/flags/**'
    ], { cwd: 'node_modules' })
    .pipe(gulp.dest(path.join(buildDir, 'flags')));
});


gulp.task('shims', () => {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(concat('shims.js'))
    .pipe(iF(build, jsMinify()))
    .pipe(gulp.dest(path.join(buildDir, 'js')));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({
      emitError: false
    }));
});


/**
 * Compile TypeScript sources in build directory.
 */

gulp.task('tsc', ['tslint'], () => {
  var tsDest = (NG2ENV === 'Dev') ? (buildDir + '/app') : '.tmp';
  var tsProject = tsc.createProject('tsconfig.json');

  return tsProject.src()
    .pipe(iF(build, sourcemaps.init()))
    .pipe(tsProject())
    .pipe(gulp.dest(tsDest));
});

gulp.task('compile', ['tsc'], () => {
  if (NG2ENV !== 'Dev') {
    var builder = new SystemBuilder();
    return builder.loadConfig('systemjs.config.js')
      .then(() => builder.buildStatic('app', path.join(buildDir, 'js', 'bundle.js')));
  }
  return;
});


/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', () => {
  gulp.watch(['src/**/**.ts'], ['compile']).on('change', function(envTs) {
    console.log('TypeScript file ' + envTs.path + ' has been changed. Compiling.');
  });
  gulp.watch(['src/**/**.html', 'src/**/*.css', 'src/img/*.*'], ['resources']).on('change', function(e) {
    console.log('Resource file ' + envLESS.path + ' has been changed. Updating.');
  });
  gulp.watch(['src/**/**.less'], ['less']).on('change', function(envLess) {
    console.log('LESS file ' + envLess.path + ' has been changed. Updating.');
  });
});

gulp.task('appsettings', function(cb) {
  fs.writeFile('appsettings.yml', 'ApiEndpoint: http://localhost:5000/api/', cb);
});

gulp.task('api', function() {
  gulp.src('appsettings.yml')
    .pipe(tsconfig('AppSettings', JSON.parse('{"parser": "yml"}')))
    .pipe(gulp.dest('./src/app'))
});


gulp.task('bundle', function() {
  var bundleTpl;
  if (NG2ENV === 'Dev') {
    bundleTpl = '<script src="systemjs.config.js"></script>' +
      '<script>System.import(\'app\').catch(function(err) {console.error(err);});</script>';
  } else {
    bundleTpl = '<script type="text/javascript" src="js/bundle.js"></script>';
  }

  return gulp.src('src/index.html')
    .pipe(replace('<--bundleTpl-->', bundleTpl))
    .pipe(gulp.dest(buildDir));
});

gulp.task('systemjs', function() {
  if (NG2ENV === 'Dev') {
    return gulp.src('systemjs.config.js')
      .pipe(replace('.tmp', 'app'))
      .pipe(gulp.dest(buildDir));
  }
  return;
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("node_modules", () => {
  if (NG2ENV === 'Dev') {
    return gulp.src([
        'rxjs/**',
        'core-js/**',
        'zone.js/dist/**',
        'systemjs/dist/**',
        'ngx-bootstrap/**',
        'moment/moment.js',
        '@angular/**'
      ], { cwd: "node_modules/**" }) /* Glob required here. */
      .pipe(gulp.dest(path.join(buildDir, "node_modules")));
  }
  return;
});

/**
 * Build the project.
 */
gulp.task('build', [
  'appsettings',
  'api',
  'compile',
  'shims',
  'less',
  'fonts',
  'flags',
  'resources',
  'node_modules',
  'systemjs',
  'bundle'
], () => {
  console.log('Building the project ...');
  if (NG2ENV !== 'Dev') {
    return gulp.src(path.join(buildDir, 'js', 'bundle.js'))
      .pipe(iF(build, jsMinify()))
      .pipe(gulp.dest(path.join(buildDir, 'js')));
  }
  return;
});
