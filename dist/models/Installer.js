"use strict";
exports.__esModule = true;
var Installer = /** @class */ (function () {
    function Installer(title, version, downloadUrl, description) {
        if (description === void 0) { description = ''; }
        this.version = "";
        this.downloadUrl = "";
        this.title = "";
        this.description = "";
        this.title = title;
        this.description = description;
        this.downloadUrl = downloadUrl;
        this.version = version;
    }
    return Installer;
}());
exports.Installer = Installer;
