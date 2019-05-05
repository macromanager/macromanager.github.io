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
var core_1 = require("@angular/core");
var ProductInfoService_1 = require("../services/ProductInfoService");
var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(prodInfoService) {
        this.prodInfoService = prodInfoService;
    }
    DownloadsComponent.prototype.ngOnInit = function () {
        this.setDownloads();
        //this.setCards();
    };
    DownloadsComponent.prototype.setDownloads = function () {
        this.installers = this.prodInfoService.getInstallers();
    };
    DownloadsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //moduleId: __moduleName,
            selector: "downloads-page-ui",
            templateUrl: "../views/downloads.html",
            styleUrls: ["../assets/styles/css/downloads.css"]
        }),
        __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])
    ], DownloadsComponent);
    return DownloadsComponent;
}());
exports.DownloadsComponent = DownloadsComponent;
