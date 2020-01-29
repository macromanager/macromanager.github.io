(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;

var core_1 = __webpack_require__(1); //import {HeaderComponent} from './HeaderComponent'


var AppComponent =
/** @class */
function () {
  function AppComponent() {}

  AppComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "app-ui",
    template: __webpack_require__(507),
    styles: [__webpack_require__(508)]
  })], AppComponent);
  return AppComponent;
}();

exports.AppComponent = AppComponent;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(89);

var DownloadsComponent =
/** @class */
function () {
  function DownloadsComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
  }

  DownloadsComponent.prototype.ngOnInit = function () {
    this.setDownloads(); //this.setCards();
  };

  DownloadsComponent.prototype.setDownloads = function () {
    this.installers = this.prodInfoService.getInstallers();
  };

  DownloadsComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    template: __webpack_require__(520),
    styles: [__webpack_require__(521)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], DownloadsComponent);
  return DownloadsComponent;
}();

exports.DownloadsComponent = DownloadsComponent;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(89);

var HomeComponent =
/** @class */
function () {
  function HomeComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
  }

  HomeComponent.prototype.ngOnInit = function () {
    this.setImageUrls();
    this.setCards();
  };

  HomeComponent.prototype.setImageUrls = function () {
    this.slideUrls = this.prodInfoService.getImageUrls();
  };

  HomeComponent.prototype.setCards = function () {
    this.cards = this.prodInfoService.getCards();
  };

  HomeComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "home-page-ui",
    template: __webpack_require__(529),
    styles: [__webpack_require__(530)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HomeComponent);
  return HomeComponent;
}();

exports.HomeComponent = HomeComponent;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var LearnComponent =
/** @class */
function () {
  function LearnComponent() {}

  LearnComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "learn-page-ui",
    template: __webpack_require__(532),
    styles: [__webpack_require__(533)]
  })], LearnComponent);
  return LearnComponent;
}();

exports.LearnComponent = LearnComponent;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var IocRegistrations_1 = __webpack_require__(502);

var awilix_1 = __webpack_require__(246);

var Bootstrapper =
/** @class */
function () {
  function Bootstrapper() {}

  Bootstrapper.initialize = function () {
    this.container = awilix_1.createContainer();
    this.components = [];
    IocRegistrations_1.IocRegistrations.loadServices(this.container);
    this.components = IocRegistrations_1.IocRegistrations.loadComponents(this.container);
  };

  Bootstrapper.getInstanceByString = function (typeName) {
    arguments;
    var service = this.container.resolve('ProductInfoService');
    return;
  };

  Bootstrapper.getInstanceByType = function (typeArg) {
    var typeName = typeArg.name;
    var service = this.container.resolve(typeName);
    return service;
  };

  return Bootstrapper;
}();

exports.Bootstrapper = Bootstrapper;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var Card_1 = __webpack_require__(248);

var CardComponent =
/** @class */
function () {
  function CardComponent() {}

  __decorate([core_1.Input(), __metadata("design:type", Card_1.Card)], CardComponent.prototype, "card");

  CardComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "card-ui",
    template: __webpack_require__(510),
    styles: [__webpack_require__(511)]
  })], CardComponent);
  return CardComponent;
}();

exports.CardComponent = CardComponent;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var Card =
/** @class */
function () {
  function Card(title, description, route, imgUrl) {
    if (imgUrl === void 0) {
      imgUrl = '';
    }

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
}();

exports.Card = Card;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var CarouselComponent =
/** @class */
function () {
  function CarouselComponent() {
    var _this = this; // new Card('Learn', 'test description', '/learn'),
    // new Card('Download', 'test description2', '/downloads')


    this.slides = function () {
      return _this.getSlides(_this.slideUrls);
    };
  }

  CarouselComponent.prototype.getSlides = function (urls) {
    var slides = [];
    urls.forEach(function (val, index) {
      var activeClass = index === 0 ? 'active' : '';
      var className = "carousel-item " + activeClass;
      var slide = {
        "class": className,
        alt: index,
        src: val
      };
      slides.push(slide);
    });
    return slides;
  };

  __decorate([core_1.Input(), __metadata("design:type", Array)], CarouselComponent.prototype, "slideUrls");

  CarouselComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "carousel-ui",
    template: __webpack_require__(513),
    styles: [__webpack_require__(514)]
  })], CarouselComponent);
  return CarouselComponent;
}();

exports.CarouselComponent = CarouselComponent;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;

var Customer_1 = __webpack_require__(516);

var core_1 = __webpack_require__(1);

var CustomerComponent =
/** @class */
function () {
  function CustomerComponent() {
    this.CurrentCustomer = new Customer_1.Customer();
  }

  CustomerComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "customer-ui",
    template: __webpack_require__(517)
  })], CustomerComponent);
  return CustomerComponent;
}();

exports.CustomerComponent = CustomerComponent;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true; //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(89);

var FooterComponent =
/** @class */
function () {
  function FooterComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
  }

  FooterComponent.prototype.ngOnInit = function () {
    this.setProps(); //this.setCards();
  };

  FooterComponent.prototype.setProps = function () {
    this.logoUrl = this.prodInfoService.getLogoUrl();
    this.email = this.prodInfoService.getEmail();
  };

  FooterComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "footer-ui",
    template: __webpack_require__(523),
    styles: [__webpack_require__(524)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], FooterComponent);
  return FooterComponent;
}();

exports.FooterComponent = FooterComponent;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true; //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(89);

var HeaderComponent =
/** @class */
function () {
  function HeaderComponent(prodInfoService) {
    this.prodInfoService = prodInfoService;
    this.isMobileMenuVisibility = false;
  }

  HeaderComponent.prototype.menuClickHandler = function () {
    var menu = document.getElementById('collapseMobileMenu');
    menu.classList.remove("show");
  };

  HeaderComponent.prototype.ngOnInit = function () {
    this.setLogo(); //this.setCards();
  };

  HeaderComponent.prototype.setLogo = function () {
    this.logoUrl = this.prodInfoService.getLogoUrl();
  };

  HeaderComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "header-ui",
    template: __webpack_require__(526),
    styles: [__webpack_require__(527)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HeaderComponent);
  return HeaderComponent;
}();

exports.HeaderComponent = HeaderComponent;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true; //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var MenuComponent =
/** @class */
function () {
  function MenuComponent() {
    this.navigationEvent = new core_1.EventEmitter(); //CurrentCustomer:Customer = new Customer();
  }

  MenuComponent.prototype.notifyNavigationOccured = function (event) {
    //console.log('navigation occured');
    console.log(event);
    var destination = event.target.text;
    console.log(destination);
    this.navigationEvent.emit(destination);
  };

  __decorate([core_1.Output(), __metadata("design:type", Object)], MenuComponent.prototype, "navigationEvent");

  MenuComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "menu-ui",
    template: __webpack_require__(535),
    styles: [__webpack_require__(536)]
  })], MenuComponent);
  return MenuComponent;
}();

exports.MenuComponent = MenuComponent;

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(188);

__webpack_require__(459);

__webpack_require__(225);

var Bootstrapper_1 = __webpack_require__(245);

Bootstrapper_1.Bootstrapper.initialize();

var platform_browser_dynamic_1 = __webpack_require__(226);

var MainModuleLibrary_1 = __webpack_require__(539); // var service = Bootstrapper.getInstanceByType(ProductInfoService);


var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var ModuleLoader_1 = __webpack_require__(503);

var awilix_1 = __webpack_require__(246); // const isClass = require('is-class')


var IocRegistrations =
/** @class */
function () {
  function IocRegistrations() {} // public static register(container: AwilixContainer){
  //   this.loadServices(container);
  //   this.loadComponents(container);
  // }


  IocRegistrations.loadComponents = function (container) {
    var ctx = __webpack_require__(506);

    var moduleInfoCollection = ModuleLoader_1.ModuleLoader.getModulesByContext(ctx);
    moduleInfoCollection.forEach(function (info) {
      var _a;

      var name = info["name"];
      var mod = info["mod"];
      var reg = (_a = {}, _a[name] = awilix_1.asClass(mod).singleton(), _a); // components.push(info);

      container.register(reg);
    });
    return moduleInfoCollection; // components = moduleInfoCollection;
  };

  IocRegistrations.loadServices = function (container) {
    var ctx = __webpack_require__(538);

    var moduleInfoCollection = ModuleLoader_1.ModuleLoader.getModulesByContext(ctx);
    moduleInfoCollection.forEach(function (info) {
      var _a;

      var name = info["name"];
      var mod = info["mod"];
      var reg = (_a = {}, _a[name] = awilix_1.asClass(mod).singleton(), _a);
      container.register(reg);
    });
  };

  return IocRegistrations;
}();

exports.IocRegistrations = IocRegistrations; // const ctx = require.context('./services', true)
// // const { createContainer } = require('awilix')
// const path = require('path')
// const container = createContainer()
// ctx.keys().forEach(key => {
//   const name = path.basename(key, ".ts");
//   var mod = ctx(key);
//   var classDef = mod[name];
// var isClassCheck = isClass(classDef);
// console.log("test key: " + key);
// console.log("test filename: " + name);
// console.log("test classDef: " + classDef);
// console.log("test class: " + isClassCheck);
// var reg = {[name]: asClass(classDef).singleton()};
// // console.log("reg: " + JSON.stringify(reg));
// container.register(reg);
// container.loadModules([
//   // Globs!
//   [
//     // To have different resolverOptions for specific modules.
//     'services/**/*.js',
//     {
//       register: asClass,
//       lifetime: Lifetime.SINGLETON
//     }
//   ],
// //   'services/**/*.js',
// //   'repositories/**/*.js'
// ], {
//         // We want to register `UserService` as `userService` -
//         // by default loaded modules are registered with the
//         // name of the file (minus the extension)
//         // formatName: 'camelCase',
//         // Apply resolver options to all modules.
//         resolverOptions: {
//             // We can give these auto-loaded modules
//             // the deal of a lifetime! (see what I did there?)
//             // By default it's `TRANSIENT`.
//             lifetime: Lifetime.SINGLETON,
//             // We can tell Awilix what to register everything as,
//             // instead of guessing. If omitted, will inspect the
//             // module to determinw what to register as.
//             register: asClass
//         }
//     }
// )
// We are now ready! We now have a userService, userRepository and emailService!
// var service = container.resolve('ProductInfoService');
// console.log(service);

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var path = __webpack_require__(504);

var ModuleLoader =
/** @class */
function () {
  function ModuleLoader() {}

  ModuleLoader.getModulesByContext = function (ctx, ext) {
    if (ext === void 0) {
      ext = ".ts";
    }

    var moduleInfoCollection = [];
    ctx.keys().forEach(function (key) {
      var info = [];
      var filename = path.basename(key);
      var name = path.basename(key, ext); // var ext = parse(filename).ext; 

      var modContext = ctx(key);
      var mod = modContext[name];
      info["mod"] = mod;
      info["name"] = name; // info["ext"] = ext;

      moduleInfoCollection.push(info);
    });
    return moduleInfoCollection;
  };

  return ModuleLoader;
}();

exports.ModuleLoader = ModuleLoader;

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": 181,
	"./AppComponent.ts": 181,
	"./CardComponent": 247,
	"./CardComponent.ts": 247,
	"./CarouselComponent": 249,
	"./CarouselComponent.ts": 249,
	"./CustomerComponent": 250,
	"./CustomerComponent.ts": 250,
	"./DownloadsComponent": 182,
	"./DownloadsComponent.ts": 182,
	"./FooterComponent": 251,
	"./FooterComponent.ts": 251,
	"./HeaderComponent": 252,
	"./HeaderComponent.ts": 252,
	"./HomeComponent": 183,
	"./HomeComponent.ts": 183,
	"./LearnComponent": 184,
	"./LearnComponent.ts": 184,
	"./MenuComponent": 253,
	"./MenuComponent.ts": 253
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 506;

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <header>\r\n        <header-ui class='header'></header-ui>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <footer>\r\n        <footer-ui></footer-ui>\r\n    </footer>\r\n</div>\r\n";

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(509);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  padding: 0px; }\r\n  html .app, body .app {\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-direction: column; }\r\n    html .app main, body .app main {\r\n      flex-grow: 1; }\r\n", ""]);



/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = "<div class='my-card'>\r\n    <div class='img-wrapper'>\r\n        <img>\r\n    </div>\r\n    <div class='card-content'>\r\n        <div class='header'>\r\n            <!-- [routerLink]=\"['user', user.id, 'details']\" -->\r\n            <a [routerLink]=\"[card.route]\">\r\n                <h2 class='title'> {{card.title}} </h2>\r\n            </a>\r\n\r\n            <!-- <h2 class='title'> {{card.title}}  </h2> -->\r\n        </div>\r\n        <div class='body'>\r\n            <p> {{card.description}} </p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(512);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, ".my-card {\n  text-align: center;\n  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.06);\n  padding: 20px;\n  margin: 10px;\n  background-color: white;\n  width: 100%; }\n  .my-card .header {\n    margin-bottom: 20px; }\n\n:host {\n  display: flex;\n  flex-grow: 1; }\n", ""]);



/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner\">\r\n              <div [class]=\"slide.class\" *ngFor=\"let slide of slides()\">\r\n                <div class=\"slide-wrapper\">\r\n                    <img class=\"d-block w-100\" [src]=\"slide.src\" [alt]=\"slide.alt\">\r\n                </div>\r\n              </div>\r\n        </div>              \r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <div class=\"carousel-icon-wrapper\">\r\n  \r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            \r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <div class=\"carousel-icon-wrapper\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n</div>";

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(515);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, ".carousel .slide-wrapper {\n  padding: 0px 40px; }\n\n.carousel .carousel-icon-wrapper {\n  background-color: black;\n  padding: 8px; }\n\n.carousel .carousel-inner {\n  margin: auto;\n  width: 80%;\n  max-width: 600px; }\n", ""]);



/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var Customer =
/** @class */
function () {
  function Customer() {
    this.CustomerName = "";
    this.CustomerCode = "";
    this.CustomerAmount = 0;
  }

  return Customer;
}();

exports.Customer = Customer;

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"customer\">\r\n    Name:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerName\"><br /><br />\r\n    Code:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerCode\"><br /><br />\r\n    Amount:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerAmount\"><br /><br />\r\n</div>\r\n{{CurrentCustomer.CustomerName}}<br /><br />\r\n{{CurrentCustomer.CustomerCode}}<br /><br />\r\n{{CurrentCustomer.CustomerAmount}}<br /><br />";

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //import { Injectable } from '@angular/core';

exports.__esModule = true; // @Injectable({
//   providedIn: 'root',
// })

var AppConfig =
/** @class */
function () {
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
}();

exports.AppConfig = AppConfig;

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var Installer =
/** @class */
function () {
  function Installer(title, version, downloadUrl, description) {
    if (description === void 0) {
      description = '';
    }

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
}();

exports.Installer = Installer;

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <section class=\"section-downloads\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Desktop Application Installers </h1>\r\n                    <p>\r\n                        The application is currently in the beta testing phase. It has been made publically available with the goal of collecting feedback on the features that currently exist as well as those that you would find valuable, but are missing.\r\n                    </p>\r\n                    <ul class=\"installers\">\r\n                        <li *ngFor=\"let installer of installers\">  \r\n                            <a [href]=\"installer.downloadUrl\" download> {{installer.title}} </a>\r\n                        </li>\r\n                    </ul>\r\n                 \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(522);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.page-wrapper .subtitle {\n  text-decoration: underline; }\n\n.page-wrapper .title {\n  margin-bottom: 20px; }\n\n.page-wrapper p {\n  max-width: 700px; }\n\n.page-wrapper .section-example {\n  background-color: #f4f4f4; }\n", ""]);



/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\r\n    <section class=\"section-footer\">\r\n        <div class='footer-content'>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <div class=\"logo-wrapper\">\r\n                            <img src= {{logoUrl}}>\r\n                        </div>\r\n                        <p>email: {{email}} </p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <h3> Links </h3>\r\n                        <menu-ui class=\"footer\"></menu-ui>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       \r\n    </section>\r\n  \r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(525);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.section-footer {\n  background-color: #2e302b;\n  color: white; }\n  .section-footer .logo-wrapper {\n    max-width: 200px; }\n", ""]);



/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n        \r\n                <div class='header-content'>\r\n                    <div class=\"logo-wrapper\">\r\n                        <a (click)=\"menuClickHandler()\" class='logo' [routerLink]=\"['home']\">\r\n                            <img src= {{logoUrl}}>\r\n                        </a> \r\n                    </div>\r\n                    <button class=\"d-block d-md-none btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <i class=\"fas fa-bars\"></i>\r\n                        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n                    </button>\r\n                    <div class=\"fullscreen-menu-wrapper d-none d-md-block\">\r\n                        <menu-ui></menu-ui>\r\n                        <!-- <nav class='main-nav'>\r\n                            <ul class=\"nav-list\">\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['learn']\"> Learn </a>\r\n                                </li>\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['downloads']\"> Downloads </a>\r\n                                </li>\r\n                            </ul>\r\n                        </nav> -->\r\n                    </div>\r\n\r\n\r\n                  \r\n                </div>\r\n                <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                        <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n\r\n";

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(528);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.header-wrapper {\n  background-color: #2e302b; }\n  .header-wrapper .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 0px; }\n    .header-wrapper .header-content .logo-wrapper {\n      max-width: 200px; }\n    .header-wrapper .header-content .logo {\n      color: white;\n      font-size: 30px;\n      text-decoration: none; }\n", ""]);



/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"intro\">\r\n                        <h1 class='title'> What is MacroManager? </h1>\r\n                        <p> MacroManager is a tool that manages scripts written in Visual Basic for Applications (VBA). The desktop application allows users to easily create and distribute packages containing VBA macros to facilitate code reusability. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section-cards\">\r\n        <div class=\"card-collection\">\r\n            <div class=\"container\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-12 col-md-6\" *ngFor=\"let card of cards\">\r\n                        <card-ui\r\n                            [card]=\"card\"\r\n                            >\r\n                        </card-ui>\r\n                    </div>                \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n  </section>\r\n    \r\n  <section class=\"section-carousel\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                    <carousel-ui [slideUrls]=\"slideUrls\">\r\n                    </carousel-ui>  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     \r\n  </section>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(531);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\n.section-intro .intro .title {\n  font-size: 30px; }\n\n.section-intro .intro .title {\n  margin-bottom: 25px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.card-collection {\n  display: flex; }\n  .card-collection [class*=col-] {\n    display: flex; }\n\n.section-intro .intro {\n  text-align: center;\n  max-width: 700px;\n  margin: 0px auto; }\n\n.section-cards {\n  background-color: #f4f4f4; }\n", ""]);



/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <!-- <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section> -->\r\n\r\n    <section class=\"section-example\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Package Installation </h1>\r\n                    <p> \r\n                        VBA is great for solving problems with automation and is especially valuable when macros are developed for reusability. MacroManager extends the value of your macros by providing a platform for storing and distributing reusable code. Packages are installed into an open Excel workbook by using the MacroManager desktop application. This tutorial will demonstrate how to install packages by using the “Hello, World.” package as an example. Once the package is installed you can use the macros like any other VBA code in your workbook.\r\n                    </p>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Prerequisites </h2>\r\n                            <ul>\r\n                                <li> MacroManager desktop application </li>\r\n                                <li> Microsoft Excel </li>\r\n                            </ul>\r\n                    </div>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Install the Macro package </h2>\r\n                         \r\n                            <p>\r\n                                Begin by opening the MacroManager desktop application. Use the search bar to find the package from the collection. Select the package to display its details and click install. Confirm that the contents of the package were installed successfully, by opening up the VBA editor. There should be a new subroutine called MacroManager_HelloWorld in a code module (Module1). Run the subroutine to see a popup message.\r\n                            </p>\r\n\r\n                            <!-- <div class=\"image-wrapper\">\r\n                                <img src=\"/images/macro-manager-images/macro_packages.png\">\r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(534);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.page-wrapper .subtitle {\n  text-decoration: underline; }\n\n.page-wrapper .title {\n  margin-bottom: 20px; }\n\n.page-wrapper p {\n  max-width: 700px; }\n\n.page-wrapper .section-example {\n  background-color: #f4f4f4; }\n", ""]);



/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <ul class=\"nav-list\">\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['learn']\"> Learn </a>\r\n        </li>\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['downloads']\"> Download </a>\r\n        </li>\r\n    </ul>\r\n</nav>";

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(537);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(false);
// Module
exports.push([module.i, "html, body {\n  font-size: 14px;\n  background-color: white; }\n\nsection {\n  padding: 50px 0px; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n:host(.footer) .nav-list {\n  flex-direction: column; }\n  :host(.footer) .nav-list .nav-item {\n    margin: 0px; }\n    :host(.footer) .nav-list .nav-item a {\n      background-color: transparent;\n      color: white;\n      padding: 0px; }\n      :host(.footer) .nav-list .nav-item a:hover {\n        text-decoration: underline; }\n\n:host(.mobile) .nav-list {\n  height: 100vh;\n  width: 100%;\n  flex-direction: column; }\n  :host(.mobile) .nav-list .nav-item {\n    margin: 0px;\n    padding: 0px;\n    margin-bottom: 5px; }\n    :host(.mobile) .nav-list .nav-item a {\n      display: block;\n      padding: 5px 20px; }\n\n.nav-list {\n  display: flex;\n  list-style: none;\n  padding: 0px;\n  margin: 0px; }\n  .nav-list .nav-item {\n    margin-left: 10px; }\n    .nav-list .nav-item a {\n      background-color: dimgray;\n      display: block;\n      padding: 5px 20px;\n      color: white;\n      text-decoration: none;\n      font-weight: 500;\n      transition: background-color 0.3s; }\n      .nav-list .nav-item a:hover {\n        background-color: white;\n        color: #2e302b; }\n", ""]);



/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ProductInfoService": 89,
	"./ProductInfoService.ts": 89
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 538;

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;

var Bootstrapper_1 = __webpack_require__(245);

var core_1 = __webpack_require__(1);

var platform_browser_1 = __webpack_require__(60);

var forms_1 = __webpack_require__(540);

var router_1 = __webpack_require__(254);

var ApplicationRoutes_1 = __webpack_require__(541);

var AppComponent_1 = __webpack_require__(181); // import {HomeComponent} from '../components/HomeComponent'
// import {HeaderComponent} from '../components/HeaderComponent'
// import {FooterComponent} from '../components/FooterComponent'
// import { LearnComponent } from '../components/LearnComponent';
// import { DownloadsComponent } from '../components/DownloadsComponent';
// import { CardComponent } from '../components/CardComponent';
// import { MenuComponent } from '../components/MenuComponent';
// import { CarouselComponent } from '../components/CarouselComponent';


var MainModuleLibrary =
/** @class */
function () {
  function MainModuleLibrary() {}

  MainModuleLibrary = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(ApplicationRoutes_1.ApplicationRoutes, {
      scrollPositionRestoration: 'enabled'
    }), platform_browser_1.BrowserModule, forms_1.FormsModule],
    // declarations: [
    //     HeaderComponent, 
    //     AppComponent, 
    //     FooterComponent, 
    //     HomeComponent,
    //     DownloadsComponent,
    //     LearnComponent, 
    //     CardComponent, 
    //     MenuComponent, 
    //     CarouselComponent
    // ],
    declarations: Bootstrapper_1.Bootstrapper.components.map(function (mod) {
      return mod['mod'];
    }),
    bootstrap: [AppComponent_1.AppComponent]
  })], MainModuleLibrary);
  return MainModuleLibrary;
}();

exports.MainModuleLibrary = MainModuleLibrary;

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true; //import {CustomerComponent} from '../components/CustomerComponent';

var HomeComponent_1 = __webpack_require__(183);

var LearnComponent_1 = __webpack_require__(184);

var DownloadsComponent_1 = __webpack_require__(182); //import {WelcomeComponent} from "../Component/WelcomeComponent";


exports.ApplicationRoutes = [{
  path: 'downloads',
  component: DownloadsComponent_1.DownloadsComponent
}, {
  path: 'learn',
  component: LearnComponent_1.LearnComponent
}, {
  path: 'home',
  component: HomeComponent_1.HomeComponent
}, {
  path: '',
  component: HomeComponent_1.HomeComponent
}];

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var AppConfig_1 = __webpack_require__(518);

var Card_1 = __webpack_require__(248);

var Installer_1 = __webpack_require__(519);

var ProductInfoService =
/** @class */
function () {
  function ProductInfoService() {
    this.config = new AppConfig_1.AppConfig();
    this.productName = "MacroManager";
    this.logoUrl = this.config.getUploadsPath() + '/main/MacroManager Logo Stacked-light.png';
    this.email = "evandsilverstein@gmail.com";
    this.imageUrls = this.initializeImages();
    this.cards = this.initializeCards();
    this.installers = this.initializeInstallers();
  }

  ProductInfoService.prototype.getEmail = function () {
    return this.email;
  };

  ProductInfoService.prototype.getLogoUrl = function (isDark) {
    if (isDark === void 0) {
      isDark = true;
    }

    return this.logoUrl;
  };

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
    var urls = [imagesPath + '/macro_packages.png', imagesPath + '/macro_macroEditor_properties.png', imagesPath + '/macro_macroEditor_code.png', imagesPath + '/macro_account_packages.png', imagesPath + '/macro_install.png'];
    return urls;
  };

  ProductInfoService.prototype.initializeInstallers = function () {
    var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    var title = 'MacroManager';
    var version = '1.1.68.0';
    var url = downloadsPath + '/MacroManager_v1.1.68.0.msi';
    var installer1 = new Installer_1.Installer(title + "_v" + version, version, url); // var title = 'MacroManager';
    // var version = '1.1.64.0';
    // var url = downloadsPath + '/MacroManager_v1.1.64.0.msi';
    // var installer1 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.7';
    // var url = downloadsPath + '/MacroManager_v1.0.7.msi';
    // var installer1 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.8';
    // var url = downloadsPath + '/MacroManager_v1.0.8.msi';
    // var installer2 = new Installer(title + "_v" + version, version, url);
    // var downloadsPath = this.config.getUploadsPath() + '/macro-manager-installers';
    // var title = 'MacroManager';
    // var version = '1.0.9';
    // var url = downloadsPath + '/MacroManager_v1.0.9.msi';
    // var installer3 = new Installer(title + "_v" + version, version, url);

    var downloads = [// installer3,
    // installer2, 
    installer1];
    return downloads;
  };

  ProductInfoService.prototype.initializeCards = function () {
    var cards = [new Card_1.Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'), new Card_1.Card('Download', 'Follow this link to get the latest version of this application', '/downloads')];
    return cards;
  };

  ProductInfoService = __decorate([core_1.Injectable({
    providedIn: 'root'
  }), __metadata("design:paramtypes", [])], ProductInfoService);
  return ProductInfoService;
}();

exports.ProductInfoService = ProductInfoService;

/***/ })

},[[458,0,1]]]);
//# sourceMappingURL=app.js.map