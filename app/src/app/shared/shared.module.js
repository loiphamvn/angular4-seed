System.register(["@angular/core", "@angular/common", "./services/session", "./pipes/trim", "./pipes/capitalize", "./pipes/characters"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, session_1, trim_1, capitalize_1, characters_1, SharedModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            },
            function (trim_1_1) {
                trim_1 = trim_1_1;
            },
            function (capitalize_1_1) {
                capitalize_1 = capitalize_1_1;
            },
            function (characters_1_1) {
                characters_1 = characters_1_1;
            }
        ],
        execute: function () {
            SharedModule = (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                    ],
                    declarations: [
                        trim_1.TrimPipe,
                        capitalize_1.CapitalizePipe,
                        characters_1.CharactersPipe,
                    ],
                    exports: [
                        common_1.CommonModule,
                    ],
                    providers: [
                        session_1.SessionService
                    ]
                })
            ], SharedModule);
            exports_1("SharedModule", SharedModule);
        }
    };
});
