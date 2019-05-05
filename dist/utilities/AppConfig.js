"use strict";
//import { Injectable } from '@angular/core';
exports.__esModule = true;
// @Injectable({
//   providedIn: 'root',
// })
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.imagesPath = "/uploads";
    }
    AppConfig.prototype.getUploadsPath = function () {
        return this.imagesPath;
    };
    AppConfig.prototype.getImageUrl = function (fileName) {
        var imagesPath = this.getUploadsPath();
        var fullpath = imagesPath + '/' + fileName;
        return fullpath;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
