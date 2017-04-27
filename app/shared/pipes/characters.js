System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, CharactersPipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CharactersPipe = (function () {
                function CharactersPipe() {
                }
                CharactersPipe.prototype.transform = function (input, chars, breakOnWord) {
                    if (breakOnWord === void 0) { breakOnWord = true; }
                    if (isNaN(chars)) {
                        return input;
                    }
                    if (chars <= 0) {
                        return '';
                    }
                    if (input && input.length > chars) {
                        input = input.substring(0, chars);
                        if (!breakOnWord) {
                            var lastspace = input.lastIndexOf(' ');
                            //get last space
                            if (lastspace !== -1) {
                                input = input.substr(0, lastspace);
                            }
                        }
                        else {
                            while (input.charAt(input.length - 1) === ' ') {
                                input = input.substr(0, input.length - 1);
                            }
                        }
                        return input + '…';
                    }
                    return input;
                };
                return CharactersPipe;
            }());
            CharactersPipe = __decorate([
                core_1.Pipe({ name: 'characters' })
            ], CharactersPipe);
            exports_1("CharactersPipe", CharactersPipe);
        }
    };
});
