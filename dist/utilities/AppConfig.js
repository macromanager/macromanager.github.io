"use strict";
//import { Injectable } from '@angular/core';
exports.__esModule = true;
// @Injectable({
//   providedIn: 'root',
// })
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.imagesPath = "/images";
    }
    AppConfig.prototype.getImagesPath = function () {
        return this.imagesPath;
    };
    AppConfig.prototype.getImageUrl = function (fileName) {
        var imagesPath = this.getImagesPath();
        var fullpath = imagesPath + '/' + fileName;
        return fullpath;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
