System.register(["@angular/core", "./lang-en", "./lang-es", "./lang-zh"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, lang_en_1, lang_es_1, lang_zh_1, TRANSLATIONS, dictionary, TRANSLATION_PROVIDERS, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_en_1_1) {
                lang_en_1 = lang_en_1_1;
            },
            function (lang_es_1_1) {
                lang_es_1 = lang_es_1_1;
            },
            function (lang_zh_1_1) {
                lang_zh_1 = lang_zh_1_1;
            }
        ],
        execute: function () {
            // translation token
            exports_1("TRANSLATIONS", TRANSLATIONS = new core_1.OpaqueToken('translations'));
            // all traslations
            dictionary = (_a = {},
                _a[lang_en_1.LANG_EN_NAME] = lang_en_1.LANG_EN_TRANS,
                _a[lang_es_1.LANG_ES_NAME] = lang_es_1.LANG_ES_TRANS,
                _a[lang_zh_1.LANG_ZH_NAME] = lang_zh_1.LANG_ZH_TRANS,
                _a);
            // providers
            exports_1("TRANSLATION_PROVIDERS", TRANSLATION_PROVIDERS = [
                { provide: TRANSLATIONS, useValue: dictionary },
            ]);
        }
    };
});
