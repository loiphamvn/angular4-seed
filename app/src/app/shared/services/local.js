System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalService;
    return {
        setters: [],
        execute: function () {
            LocalService = (function () {
                function LocalService() {
                }
                LocalService.prototype.get = function (key) {
                    var record;
                    record = JSON.parse(localStorage.getItem(key));
                    if (!record) {
                        return null;
                    }
                    return new Date().getTime() < record.timestamp && JSON.parse(record.value);
                };
                LocalService.prototype.set = function (key, val, seconds) {
                    if (seconds === void 0) { seconds = 3600; }
                    var expire, record;
                    expire = seconds * 60 * 1000;
                    record = {
                        value: JSON.stringify(val),
                        timestamp: new Date().getTime() + expire
                    };
                    localStorage.setItem(key, JSON.stringify(record));
                    return val;
                };
                LocalService.prototype.unset = function (key) {
                    return localStorage.removeItem(key);
                };
                LocalService.prototype.clear = function () {
                    return localStorage.clear();
                };
                return LocalService;
            }());
            exports_1("LocalService", LocalService);
        }
    };
});
