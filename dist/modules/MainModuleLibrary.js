"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var AppComponent_1 = require("../components/AppComponent");
var HomeComponent_1 = require("../components/HomeComponent");
var HeaderComponent_1 = require("../components/HeaderComponent");
var FooterComponent_1 = require("../components/FooterComponent");
var router_1 = require("@angular/router");
var ApplicationRoutes_1 = require("../routes/ApplicationRoutes");
var LearnComponent_1 = require("../components/LearnComponent");
var CardComponent_1 = require("../components/CardComponent");
var MenuComponent_1 = require("../components/MenuComponent");
var CarouselComponent_1 = require("../components/CarouselComponent");
var MainModuleLibrary = /** @class */ (function () {
    function MainModuleLibrary() {
    }
    MainModuleLibrary = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(ApplicationRoutes_1.ApplicationRoutes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule],
            declarations: [HeaderComponent_1.HeaderComponent, AppComponent_1.AppComponent, FooterComponent_1.FooterComponent, HomeComponent_1.HomeComponent, LearnComponent_1.LearnComponent, CardComponent_1.CardComponent, MenuComponent_1.MenuComponent, CarouselComponent_1.CarouselComponent],
            bootstrap: [AppComponent_1.AppComponent]
        })
    ], MainModuleLibrary);
    return MainModuleLibrary;
}());
exports.MainModuleLibrary = MainModuleLibrary;
