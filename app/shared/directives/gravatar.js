System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, md5, GravatarDirective;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            md5 = require('md5');
            GravatarDirective = (function () {
                function GravatarDirective(elementRef) {
                    this.elementRef = elementRef;
                    this.email = '';
                    this.size = 48;
                    this.fallback = 'mm';
                }
                GravatarDirective.prototype.ngOnInit = function () {
                    var _md5 = (this.email) ? md5(this.email) : md5('');
                    this.elementRef.nativeElement.src = "//www.gravatar.com/avatar/" + _md5 + "?s=" + this.size + "&d=" + this.fallback;
                };
                return GravatarDirective;
            }());
            __decorate([
                core_1.Input('email'),
                __metadata("design:type", String)
            ], GravatarDirective.prototype, "email", void 0);
            __decorate([
                core_1.Input('size'),
                __metadata("design:type", Number)
            ], GravatarDirective.prototype, "size", void 0);
            __decorate([
                core_1.Input('fallback'),
                __metadata("design:type", String)
            ], GravatarDirective.prototype, "fallback", void 0);
            GravatarDirective = __decorate([
                core_1.Directive({
                    selector: '[gravatar]'
                }),
                __metadata("design:paramtypes", [core_1.ElementRef])
            ], GravatarDirective);
            exports_1("GravatarDirective", GravatarDirective);
        }
    };
});
