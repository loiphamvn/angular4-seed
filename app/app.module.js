System.register(["@angular/core", "@angular/http", "@angular/common", "@angular/forms", "@angular/platform-browser", "./shared/shared.module", "./layout/layout.module", "./app.component", "./app.routing", "./about/components/about"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, common_1, forms_1, platform_browser_1, shared_module_1, layout_module_1, app_component_1, app_routing_1, about_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (layout_module_1_1) {
                layout_module_1 = layout_module_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        common_1.CommonModule,
                        forms_1.ReactiveFormsModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        app_routing_1.routing,
                        shared_module_1.SharedModule,
                        layout_module_1.LayoutModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        about_1.AboutComponent,
                    ],
                    providers: [
                        app_routing_1.appRoutingProviders
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
