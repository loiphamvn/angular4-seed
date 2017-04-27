System.register(["@angular/common", "@angular/router", "./translate/translations", "./translate/service", "./about/components/about"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, router_1, translations_1, service_1, about_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (translations_1_1) {
                translations_1 = translations_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            }
        ],
        execute: function () {
            // import { PageError404Component } from './pages/common/error/error404';
            // UI
            // import { ComponentsComponent } from './pages/ui/components';
            // import { IconsComponent } from './pages/ui/icons';
            // import { ButtonsComponent } from './pages/ui/buttons';
            // import { GridsComponent } from './pages/ui/grids';
            // import { TypographyComponent } from './pages/ui/typography';
            // TABLES
            // import { StaticTableComponent } from './pages/tables/static';
            // import { DynamicTableComponent } from './pages/tables/dynamic';
            // import { ResponsiveTableComponent } from './pages/tables/responsive';
            appRoutes = [
                // { path: 'tables/static', component: StaticTableComponent },
                // { path: 'tables/dynamic', component: DynamicTableComponent },
                // { path: 'tables/responsive', component: ResponsiveTableComponent },
                // { path: 'ui/grids', component: GridsComponent },
                // { path: 'ui/components', component: ComponentsComponent },
                // { path: 'ui/icons', component: IconsComponent },
                // { path: 'ui/buttons', component: ButtonsComponent },
                // { path: 'ui/typography', component: TypographyComponent },
                { path: 'about', component: about_1.AboutComponent },
                { path: '', component: about_1.AboutComponent },
                { path: '**', component: about_1.AboutComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                },
                translations_1.TRANSLATION_PROVIDERS,
                service_1.TranslateService
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});
