var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

module.exports = {
    port: 8080,
    files: ["dist/**/*.{html,htm,css,js}"],
    server: {
        baseDir: "dist",
        middleware: {
            1: proxyMiddleware('/api', {
                target: 'http://localhost:5000',
                changeOrigin: false   
            }),       
            2: proxyMiddleware('/swagger', {
                target: 'http://localhost:5000',
                changeOrigin: false   
            })           
        }
    }
};