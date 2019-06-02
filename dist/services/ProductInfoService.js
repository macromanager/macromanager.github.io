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
var AppConfig_1 = require("../utilities/AppConfig");
var Card_1 = require("../models/Card");
var Installer_1 = require("../models/Installer");
var ProductInfoService = /** @class */ (function () {
    function ProductInfoService() {
        this.config = new AppConfig_1.AppConfig;
        this.productName = "MacroManager";
        this.email = "MacroManagerInfo@gmail.com";
        this.imageUrls = this.initializeImages();
        this.cards = this.initializeCards();
        this.installers = this.initializeInstallers();
    }
    ProductInfoService.prototype.getInstallers = function () {
        return this.installers;
    };
    ProductInfoService.prototype.getImageUrls = function () {
        return this.imageUrls;
    };
    ProductInfoService.prototype.getCards = function () {
        return this.cards;
    };
    ProductInfoService.prototype.initializeImages = function () {
        var imagesPath = this.config.getUploadsPath() + '/macro-manager-images';
        var urls = [
            imagesPath + '/macro_packages.png',
            imagesPath + '/macro_macroEditor_properties.png',
            imagesPath + '/macro_macroEditor_code.png',
            imagesPath + '/macro_account_packages.png',
            imagesPath + '/macro_install.png',
        ];
        return urls;
    };
    ProductInfoService.prototype.initializeInstallers = function () {
        var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
        var title = 'MacroManager';
        var version = '1.0.7';
        var url = downloadsPath + '/MacroManager_v1.0.7.msi';
        var installer1 = new Installer_1.Installer(title + "_v" + version, version, url);
        var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
        var title = 'MacroManager';
        var version = '1.0.8';
        var url = downloadsPath + '/MacroManager_v1.0.8.msi';
        var installer2 = new Installer_1.Installer(title + "_v" + version, version, url);
        var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
        var title = 'MacroManager';
        var version = '1.0.9';
        var url = downloadsPath + '/MacroManager_v1.0.9.msi';
        var installer3 = new Installer_1.Installer(title + "_v" + version, version, url);
        var downloads = [
            installer3,
            installer2,
            installer1,
        ];
        return downloads;
    };
    ProductInfoService.prototype.initializeCards = function () {
        var cards = [
            new Card_1.Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'),
            new Card_1.Card('Download', 'Follow this link to get the latest version of this application', '/downloads')
        ];
        return cards;
    };
    ProductInfoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductInfoService);
    return ProductInfoService;
}());
exports.ProductInfoService = ProductInfoService;
