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
var ProductInfoService_1 = require("../services/ProductInfoService");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(prodInfoService) {
        this.prodInfoService = prodInfoService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.setProps();
        //this.setCards();
    };
    FooterComponent.prototype.setProps = function () {
        this.logoUrl = this.prodInfoService.getLogoUrl();
        this.email = this.prodInfoService.getEmail();
    };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //moduleId: __moduleName,
            selector: "footer-ui",
            templateUrl: "../views/footer.html",
            styleUrls: ["../assets/styles/css/footer.css"]
        }),
        __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
