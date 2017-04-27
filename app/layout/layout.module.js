System.register(["@angular/core", "./header/header", "./sidebar/sidebar"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, header_1, sidebar_1, LayoutModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            }
        ],
        execute: function () {
            LayoutModule = (function () {
                function LayoutModule() {
                }
                return LayoutModule;
            }());
            LayoutModule = __decorate([
                core_1.NgModule({
                    imports: [],
                    declarations: [
                        sidebar_1.SidebarComponent,
                        header_1.HeaderComponent
                    ],
                    exports: [
                        sidebar_1.SidebarComponent,
                        header_1.HeaderComponent
                    ]
                })
            ], LayoutModule);
            exports_1("LayoutModule", LayoutModule);
        }
    };
});
