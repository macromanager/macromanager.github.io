"use strict";
exports.__esModule = true;
var Card = /** @class */ (function () {
    function Card(title, description, route, imgUrl) {
        if (imgUrl === void 0) { imgUrl = ''; }
        this.route = "";
        this.imageUrl = "";
        this.title = "";
        this.description = "";
        this.title = title;
        this.description = description;
        this.imageUrl = imgUrl;
        this.route = route;
    }
    return Card;
}());
exports.Card = Card;
