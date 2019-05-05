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
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        var _this = this;
        // new Card('Learn', 'test description', '/learn'),
        // new Card('Download', 'test description2', '/downloads')
        this.slides = function () { return _this.getSlides(_this.slideUrls); };
    }
    CarouselComponent.prototype.getSlides = function (urls) {
        var slides = [];
        urls.forEach(function (val, index) {
            var activeClass = (index === 0) ? 'active' : '';
            var className = "carousel-item " + activeClass;
            var slide = { "class": className, alt: index, src: val };
            slides.push(slide);
        });
        return slides;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "slideUrls");
    CarouselComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            //moduleId: __moduleName,
            selector: "carousel-ui",
            templateUrl: "../views/carousel.html",
            styleUrls: ["../assets/styles/css/carousel.css"]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
