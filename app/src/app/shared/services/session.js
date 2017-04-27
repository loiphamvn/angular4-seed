System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SessionService;
    return {
        setters: [],
        execute: function () {
            SessionService = (function () {
                function SessionService() {
                }
                SessionService.prototype.get = function (key) {
                    var record;
                    record = JSON.parse(sessionStorage.getItem(key));
                    if (!record) {
                        return null;
                    }
                    return new Date().getTime() < record.timestamp && JSON.parse(record.value);
                };
                SessionService.prototype.set = function (key, val, seconds) {
                    if (seconds === void 0) { seconds = 3600; }
                    var expire, record;
                    expire = seconds * 60 * 1000;
                    record = {
                        value: JSON.stringify(val),
                        timestamp: new Date().getTime() + expire
                    };
                    sessionStorage.setItem(key, JSON.stringify(record));
                    return val;
                };
                SessionService.prototype.unset = function (key) {
                    return sessionStorage.removeItem(key);
                };
                return SessionService;
            }());
            exports_1("SessionService", SessionService);
        }
    };
});
