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
exports.__esModule = true;
//import {Customer} from '../models/Customer'
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.navigationEvent = new core_1.EventEmitter();
        //CurrentCustomer:Customer = new Customer();
    }
    MenuComponent.prototype.notifyNavigationOccured = function (event) {
        //console.log('navigation occured');
        console.log(event);
        var destination = event.target.text;
        console.log(destination);
        this.navigationEvent.emit(destination);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "navigationEvent");
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //moduleId: __moduleName,
            selector: "menu-ui",
            templateUrl: "../views/menu.html",
            styleUrls: ["../assets/styles/css/menu.css"]
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
