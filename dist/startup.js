"use strict";
exports.__esModule = true;
require("core-js/proposals/reflect-metadata");
require("zone.js/dist/zone");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var MainModuleLibrary_1 = require("./modules/MainModuleLibrary");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);
