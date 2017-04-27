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
    var core_1, ComponentsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ComponentsComponent = (function () {
                function ComponentsComponent() {
                    // pager
                    this.page = 1;
                    this.limit = 5;
                    this.perPage = [5, 10, 20, 50, 100];
                    this.totalItems = 100;
                    this.items = [];
                    // tab
                    this.tabs = [{
                            title: "Dynamic Title 1",
                            content: "Dynamic content 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        }, {
                            title: "Disabled Tab",
                            content: "Dynamic content 2. Can't show",
                            disabled: true
                        }];
                    // progressbar
                    this.max = 200;
                    this.stacked = [];
                    for (var i = 0; i < 100; i++) {
                        this.items.push('This is item #' + i);
                    }
                    this.fromItem = ((this.page - 1) * this.limit) + 1;
                    this.toItem = (this.totalItems < (this.page * this.limit)) ? this.totalItems : (this.page * this.limit);
                    // processbar
                    this.random();
                    this.randomStacked();
                }
                ComponentsComponent.prototype.setPage = function (page) {
                    this.page = page;
                };
                ComponentsComponent.prototype.pageChanged = function (event) {
                    console.log('Page changed to: ' + event.page);
                    console.log('Number items per page: ' + event.perPage);
                    this.page = event.page;
                    this.fromItem = ((this.page - 1) * this.limit) + 1;
                    this.toItem = (this.totalItems < (this.page * this.limit)) ? this.totalItems : (this.page * this.limit);
                };
                ComponentsComponent.prototype.perPageChanged = function (limit) {
                    var page = 1;
                    this.page = page;
                    this.limit = limit;
                    this.fromItem = ((page - 1) * limit) + 1;
                    this.toItem = (this.totalItems < (page * limit)) ? this.totalItems : (page * limit);
                };
                ComponentsComponent.prototype.random = function () {
                    var value = Math.floor((Math.random() * 100) + 1);
                    var type;
                    if (value < 25) {
                        type = 'success';
                    }
                    else if (value < 50) {
                        type = 'info';
                    }
                    else if (value < 75) {
                        type = 'warning';
                    }
                    else {
                        type = 'danger';
                    }
                    this.showWarning = (type === 'danger' || type === 'warning');
                    this.dynamic = value;
                    this.type = type;
                };
                ComponentsComponent.prototype.randomStacked = function () {
                    var types = ['success', 'info', 'warning', 'danger'];
                    this.stacked = [];
                    var total = 0;
                    var n = Math.floor((Math.random() * 4) + 1);
                    for (var i = 0; i < n; i++) {
                        var index = Math.floor((Math.random() * 4));
                        var value = Math.floor((Math.random() * 30) + 1);
                        total += value;
                        this.stacked.push({
                            value: value,
                            max: value,
                            type: types[index]
                        });
                    }
                };
                return ComponentsComponent;
            }());
            ComponentsComponent = __decorate([
                core_1.Component({
                    selector: 'app-components',
                    templateUrl: './app/pages/ui/components.html',
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush // require by tooltip
                }),
                __metadata("design:paramtypes", [])
            ], ComponentsComponent);
            exports_1("ComponentsComponent", ComponentsComponent);
        }
    };
});
