System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppSettings;
    return {
        setters: [],
        execute: function () {
            AppSettings = (function () {
                function AppSettings() {
                }
                Object.defineProperty(AppSettings, "ApiEndpoint", {
                    get: function () {
                        return "http://localhost:5000/api/";
                    },
                    enumerable: true,
                    configurable: true
                });
                return AppSettings;
            }());
            exports_1("AppSettings", AppSettings);
        }
    };
});
