# Angular4 with TypeScript and Gulp

[![Paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=me%40leduong%2ecom&lc=VN&currency_code=USD&bn=PP%2dDonationsBF%3adonate%2dpaypal%2dblue%2epng%3aNonHosted)
[![Gratipay Team](https://img.shields.io/gratipay/Angular-VN/shields.svg)](https://gratipay.com/Angular-VN)


[![Build Status](https://travis-ci.org/AngularVN/angular4-seed.svg?branch=master)](https://travis-ci.org/AngularVN/angular4-seed)
[![Code Climate](https://codeclimate.com/github/AngularVN/angular4-seed/badges/gpa.svg)](https://codeclimate.com/github/AngularVN/angular4-seed)
[![Coverage Status](https://coveralls.io/repos/github/AngularVN/angular4-seed/badge.svg)](https://coveralls.io/github/AngularVN/angular4-seed)
[![dependencies Status](https://david-dm.org/AngularVN/angular4-seed/status.svg)](https://david-dm.org/AngularVN/angular4-seed)
[![devDependencies Status](https://david-dm.org/AngularVN/angular4-seed/dev-status.svg)](https://david-dm.org/AngularVN/angular4-seed?type=dev)

A basic Angular4 application with Gulp as build system.

```
angular4-seed
.
├── bs-config.js
├── _config.yml
├── gulpfile.js
├── package.json
├── README.md
├── src
│   ├── app
│   │   ├── about
│   │   │   └── components
│   │   │       ├── about.html
│   │   │       └── about.ts
│   │   ├── app.component.ts
│   │   ├── app.html
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── blog
│   │   │   ├── routing.ts
│   │   │   └── service.ts
│   │   ├── common
│   │   │   └── error
│   │   │       ├── error403.html
│   │   │       ├── error403.ts
│   │   │       ├── error404.html
│   │   │       ├── error404.ts
│   │   │       ├── error500.html
│   │   │       └── error500.ts
│   │   ├── layout
│   │   │   ├── header
│   │   │   │   ├── header.html
│   │   │   │   ├── header.less
│   │   │   │   └── header.ts
│   │   │   ├── layout.module.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.html
│   │   │       ├── sidebar.less
│   │   │       └── sidebar.ts
│   │   ├── main.ts
│   │   ├── setting
│   │   │   ├── routing,ts
│   │   │   └── service.ts
│   │   ├── shared
│   │   │   ├── components
│   │   │   ├── directives
│   │   │   │   └── gravatar.ts
│   │   │   ├── pipes
│   │   │   │   ├── capitalize.ts
│   │   │   │   ├── characters.ts
│   │   │   │   └── trim.ts
│   │   │   ├── services
│   │   │   │   ├── local.ts
│   │   │   │   └── session.ts
│   │   │   └── shared.module.ts
│   │   ├── tables
│   │   │   ├── dynamic.html
│   │   │   ├── dynamic.ts
│   │   │   ├── responsive.html
│   │   │   ├── responsive.ts
│   │   │   ├── static.html
│   │   │   └── static.ts
│   │   ├── translate
│   │   │   ├── lang-en.ts
│   │   │   ├── lang-es.ts
│   │   │   ├── lang-zh.ts
│   │   │   ├── pipe.ts
│   │   │   ├── service.ts
│   │   │   └── translations.ts
│   │   ├── ui
│   │   │   ├── buttons.html
│   │   │   ├── buttons.ts
│   │   │   ├── components.html
│   │   │   ├── components.ts
│   │   │   ├── grids.html
│   │   │   ├── grids.ts
│   │   │   ├── icons.html
│   │   │   ├── icons.ts
│   │   │   ├── typography.html
│   │   │   └── typography.ts
│   │   └── user
│   │       ├── login
│   │       │   ├── component.ts
│   │       │   ├── login.html
│   │       │   └── login.less
│   │       ├── pipes.ts
│   │       ├── profile
│   │       │   ├── component.ts
│   │       │   ├── profile.html
│   │       │   └── profile.less
│   │       ├── register
│   │       │   ├── component.ts
│   │       │   ├── register.html
│   │       │   └── register.less
│   │       ├── routing.ts
│   │       ├── services.ts
│   │       └── user.less
│   ├── img
│   │   └── g1.jpg
│   ├── index.html
│   └── less
│       ├── app.less
│       ├── body.less
│       ├── buttons.less
│       ├── custom.less
│       ├── footer.less
│       ├── layout.less
│       └── var.less
├── systemjs.config.js
├── tree.txt
├── tsconfig.json
├── tslint.json
└── typings.json

25 directories, 85 files
```

Prerequisites
-------------

- nodejs
- gulp and gulp-cli
- typings
- typescript
- ts-node

Running
-------

Install dependencies:

> npm install

`node_modules` and `typings` directories should be created during the install.


### Init first

```bash
npm i
```

### Set Environment turn on Debug

#### Linux/Mac
```bash
export NG2ENV=Dev
```

#### Windows CMD
```bash
set NG2ENV=Dev
```


#### Windows Powershell
```bash
$env:NG2ENV = 'Dev'
```

### Build and Run with Liveload

```bash
npm run clean
npm run build
npm run serve
```

### Build the project:

```bash
npm run clean
npm run build
```

`build` directory should be created during the build

### Start with livereload
```bash
npm run clean
npm run build
npm start
```

The application should be displayed in the browser.


## deploy on Cloud 9

```bash
nvm install 6
nvm alias default 6
sudo npm install npm@3 -g
npm i
npm start
```
