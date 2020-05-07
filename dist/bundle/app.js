(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1); //import {HeaderComponent} from './HeaderComponent'


var AppComponent =
/** @class */
function () {
  function AppComponent() {}

  AppComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "app-ui",
    template: __webpack_require__(518),
    styles: [__webpack_require__(519)]
  })], AppComponent);
  return AppComponent;
}();

exports.AppComponent = AppComponent;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82);

var DownloadsComponent =
/** @class */
function () {
  function DownloadsComponent(prodInfoService) {
    this.isBusy = true;
    this.productInfoService = prodInfoService;
  }

  DownloadsComponent.prototype.ngOnInit = function () {
    this.setDownloads();
  };

  DownloadsComponent.prototype.setDownloads = function () {
    var _this = this;

    this.productInfoService.getInstallers().then(function (installers) {
      // this.setSplashscreenVisibility(false);
      _this.isBusy = false;
      _this.installers = installers;
    });
  };

  DownloadsComponent.prototype.installerClickHandler = function (event) {
    event.preventDefault();
    var target = event.target;
    var parent = target.parentElement;
    var splash = parent.getElementsByTagName("splashscreen-ui")[0];
    splash.removeAttribute("hidden");
    var version = target.attributes.version.nodeValue;
    this.productInfoService.DownLoadInstaller(version).then(function () {
      splash.setAttribute("hidden", true);
    });
  };

  DownloadsComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "downloads-page-ui",
    template: __webpack_require__(548),
    styles: [__webpack_require__(549)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], DownloadsComponent);
  return DownloadsComponent;
}();

exports.DownloadsComponent = DownloadsComponent;

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

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82);

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
    template: __webpack_require__(557),
    styles: [__webpack_require__(558)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HomeComponent);
  return HomeComponent;
}();

exports.HomeComponent = HomeComponent;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var LearnComponent =
/** @class */
function () {
  function LearnComponent() {}

  LearnComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "learn-page-ui",
    template: __webpack_require__(560),
    styles: [__webpack_require__(561)]
  })], LearnComponent);
  return LearnComponent;
}();

exports.LearnComponent = LearnComponent;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var IocRegistrations_1 = __webpack_require__(514);

var awilix_1 = __webpack_require__(248);

var GateKeeperClient_1 = __webpack_require__(253);

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

  Bootstrapper.loadAsyncServices = function (injector) {
    return Promise.resolve().then(function () {
      var client = injector.get(GateKeeperClient_1.GateKeeperClient);
      return client.Connect();
    });
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var Card_1 = __webpack_require__(250);

var CardComponent =
/** @class */
function () {
  function CardComponent() {}

  __decorate([core_1.Input(), __metadata("design:type", Card_1.Card)], CardComponent.prototype, "card", void 0);

  CardComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "card-ui",
    template: __webpack_require__(521),
    styles: [__webpack_require__(522)]
  })], CardComponent);
  return CardComponent;
}();

exports.CardComponent = CardComponent;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
        class: className,
        alt: index,
        src: val
      };
      slides.push(slide);
    });
    return slides;
  };

  __decorate([core_1.Input(), __metadata("design:type", Array)], CarouselComponent.prototype, "slideUrls", void 0);

  CarouselComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "carousel-ui",
    template: __webpack_require__(524),
    styles: [__webpack_require__(525)]
  })], CarouselComponent);
  return CarouselComponent;
}();

exports.CarouselComponent = CarouselComponent;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Customer_1 = __webpack_require__(527);

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
    template: __webpack_require__(528)
  })], CustomerComponent);
  return CustomerComponent;
}();

exports.CustomerComponent = CustomerComponent;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __webpack_require__(530);

var core_1 = __webpack_require__(1);

var GateKeeperClient =
/** @class */
function () {
  function GateKeeperClient() {
    this.queryUrl = ""; //this.baseUrl = "http://localhost:61011/";

    this.baseUrl = 'https://evanapps-connectionmanager.azurewebsites.net/';
    this.dispatchQuery.bind(this);
  }

  GateKeeperClient.prototype.Connect = function () {
    var _this = this;

    var url = this.baseUrl + "/api/connections";
    return axios_1.default.get(url).then(function (response) {
      var connections = response.data;
      return connections;
    }).then(function (connections) {
      _this.queryUrl = connections.queryServiceUri;
      _this.routingKey = connections.clientRoutingKey.toString();
      _this.customHeaders = _this.getCustomHeaders();
    });
  };

  GateKeeperClient.prototype.getCustomHeaders = function () {
    var headers = {
      "eventRoutingKey": this.routingKey,
      "assembly-name": "MacroManagerGateKeeper.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
    };
    return headers;
  };

  GateKeeperClient.prototype.dispatchQuery = function (queryName, query) {
    var _this = this;

    if (query === void 0) {
      query = {};
    }

    var connectPromise = this.queryUrl == "" ? this.Connect() : Promise.resolve();
    return connectPromise.then(function () {
      var url = _this.queryUrl + "/" + queryName;
      return axios_1.default.post(url, query, {
        headers: _this.customHeaders
      });
    }).then(function (response) {
      return response.data;
    });
  };

  GateKeeperClient = __decorate([core_1.Injectable({
    providedIn: 'root'
  }), __metadata("design:paramtypes", [])], GateKeeperClient);
  return GateKeeperClient;
}();

exports.GateKeeperClient = GateKeeperClient;

/***/ }),

/***/ 262:
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

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82);

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
    template: __webpack_require__(551),
    styles: [__webpack_require__(552)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], FooterComponent);
  return FooterComponent;
}();

exports.FooterComponent = FooterComponent;

/***/ }),

/***/ 263:
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

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82);

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
    template: __webpack_require__(554),
    styles: [__webpack_require__(555)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HeaderComponent);
  return HeaderComponent;
}();

exports.HeaderComponent = HeaderComponent;

/***/ }),

/***/ 264:
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

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {Customer} from '../models/Customer'

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

  __decorate([core_1.Output(), __metadata("design:type", Object)], MenuComponent.prototype, "navigationEvent", void 0);

  MenuComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "menu-ui",
    template: __webpack_require__(563),
    styles: [__webpack_require__(564)]
  })], MenuComponent);
  return MenuComponent;
}();

exports.MenuComponent = MenuComponent;

/***/ }),

/***/ 265:
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82); // import {Card} from '../models/Card'


var SplashscreenComponent =
/** @class */
function () {
  function SplashscreenComponent(productInfoService) {
    this.prodInfoService = productInfoService;
  }

  SplashscreenComponent.prototype.ngOnInit = function () {
    this.setSpinnerUrl();
  }; //   @Input()
  //   set isVisible(isVisible: boolean) {
  //     console.log(isVisible);
  //     //this.setSplashscreenVisibility(isVisible);
  //   }


  SplashscreenComponent.prototype.setSpinnerUrl = function () {
    this.spinnerImgUrl = this.prodInfoService.getSpinnerUrl();
  };

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "size", void 0);

  SplashscreenComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    template: __webpack_require__(566),
    styles: [__webpack_require__(567)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], SplashscreenComponent);
  return SplashscreenComponent;
}();

exports.SplashscreenComponent = SplashscreenComponent;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(189);

__webpack_require__(471);

__webpack_require__(226);

var Bootstrapper_1 = __webpack_require__(246);

Bootstrapper_1.Bootstrapper.initialize();

var platform_browser_dynamic_1 = __webpack_require__(227);

var MainModuleLibrary_1 = __webpack_require__(570); // var service = Bootstrapper.getInstanceByType(ProductInfoService);


var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ModuleLoader_1 = __webpack_require__(515);

var awilix_1 = __webpack_require__(248); // const isClass = require('is-class')


var IocRegistrations =
/** @class */
function () {
  function IocRegistrations() {} // public static register(container: AwilixContainer){
  //   this.loadServices(container);
  //   this.loadComponents(container);
  // }


  IocRegistrations.loadComponents = function (container) {
    var ctx = __webpack_require__(517);

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
    var ctx = __webpack_require__(569);

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

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var path = __webpack_require__(516);

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

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": 182,
	"./AppComponent.ts": 182,
	"./CardComponent": 249,
	"./CardComponent.ts": 249,
	"./CarouselComponent": 251,
	"./CarouselComponent.ts": 251,
	"./CustomerComponent": 252,
	"./CustomerComponent.ts": 252,
	"./DownloadsComponent": 183,
	"./DownloadsComponent.ts": 183,
	"./FooterComponent": 262,
	"./FooterComponent.ts": 262,
	"./HeaderComponent": 263,
	"./HeaderComponent.ts": 263,
	"./HomeComponent": 184,
	"./HomeComponent.ts": 184,
	"./LearnComponent": 185,
	"./LearnComponent.ts": 185,
	"./MenuComponent": 264,
	"./MenuComponent.ts": 264,
	"./SplashscreenComponent": 265,
	"./SplashscreenComponent.ts": 265
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
webpackContext.id = 517;

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <header>\r\n        <header-ui class='header'></header-ui>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <footer>\r\n        <footer-ui></footer-ui>\r\n    </footer>\r\n</div>\r\n";

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(520);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px; }\n  html .app, body .app {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column; }\n    html .app main, body .app main {\n      flex-grow: 1; }\n", ""]);



/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div class='my-card'>\r\n    <div class='img-wrapper'>\r\n        <img>\r\n    </div>\r\n    <div class='card-content'>\r\n        <div class='header'>\r\n            <!-- [routerLink]=\"['user', user.id, 'details']\" -->\r\n            <a [routerLink]=\"[card.route]\">\r\n                <h2 class='title'> {{card.title}} </h2>\r\n            </a>\r\n\r\n            <!-- <h2 class='title'> {{card.title}}  </h2> -->\r\n        </div>\r\n        <div class='body'>\r\n            <p> {{card.description}} </p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(523);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.my-card {\r\n  text-align: center;\r\n  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.06);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  background-color: white;\r\n  width: 100%; }\r\n\r\n:host {\r\n  display: flex;\r\n  flex-grow: 1; }\r\n", ""]);



/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner\">\r\n              <div [class]=\"slide.class\" *ngFor=\"let slide of slides()\">\r\n                <div class=\"slide-wrapper\">\r\n                    <img class=\"d-block w-100\" [src]=\"slide.src\" [alt]=\"slide.alt\">\r\n                </div>\r\n              </div>\r\n        </div>              \r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <div class=\"carousel-icon-wrapper\">\r\n  \r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            \r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <div class=\"carousel-icon-wrapper\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n</div>";

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(526);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, ".carousel .slide-wrapper {\n  padding: 0px 40px; }\n\n.carousel .carousel-icon-wrapper {\n  background-color: black;\n  padding: 8px; }\n\n.carousel .carousel-inner {\n  margin: auto;\n  width: 80%;\n  max-width: 600px; }\n", ""]);



/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<div class=\"customer\">\r\n    Name:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerName\"><br /><br />\r\n    Code:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerCode\"><br /><br />\r\n    Amount:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerAmount\"><br /><br />\r\n</div>\r\n{{CurrentCustomer.CustomerName}}<br /><br />\r\n{{CurrentCustomer.CustomerCode}}<br /><br />\r\n{{CurrentCustomer.CustomerAmount}}<br /><br />";

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //import { Injectable } from '@angular/core';

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @Injectable({
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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <section class=\"section-downloads\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Windows Installers </h1>\r\n                    <p>\r\n                        This application is currently in the beta testing phase.\r\n                    </p>\r\n                    <div class=\"installers-container\">\r\n                        <splashscreen-ui [size]=\"'large'\" [hidden]=\"!isBusy\"></splashscreen-ui>\r\n                        <ul class=\"installers\">\r\n                            <li *ngFor=\"let installer of installers\">\r\n                                <div class=\"item-wrapper\">\r\n                                    <a (click)=\"installerClickHandler($event)\" class=\"installer\" attr.version=\"{{installer.version}}\">\r\n                                        {{installer.title}} {{installer.version}}\r\n                                    </a>\r\n                                    <splashscreen-ui [size]=\"'small'\" [hidden]=\"true\" ></splashscreen-ui>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(550);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.page-wrapper .subtitle {\r\n  text-decoration: underline; }\r\n\r\n.page-wrapper p {\r\n  max-width: 700px; }\r\n\r\n.page-wrapper .installers li .item-wrapper {\r\n  display: flex;\r\n  align-items: center; }\r\n\r\n.page-wrapper .installers a {\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  margin-right: 5px; }\r\n\r\n.page-wrapper .installers .img-wrapper {\r\n  height: 20px !important; }\r\n\r\n.page-wrapper .installers splashscreen-ui {\r\n  max-width: 400px; }\r\n", ""]);



/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\r\n    <section class=\"section-footer\">\r\n        <div class='footer-content'>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <div class=\"logo-wrapper\">\r\n                            <img src= {{logoUrl}}>\r\n                        </div>\r\n                        <p>email: {{email}} </p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <h3> Links </h3>\r\n                        <menu-ui class=\"footer\"></menu-ui>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       \r\n    </section>\r\n  \r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(553);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.section-footer {\r\n  background-color: #2e302b;\r\n  color: white; }\r\n  .section-footer .logo-wrapper {\r\n    max-width: 200px; }\r\n", ""]);



/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n        \r\n                <div class='header-content'>\r\n                    <div class=\"logo-wrapper\">\r\n                        <a (click)=\"menuClickHandler()\" class='logo' [routerLink]=\"['home']\">\r\n                            <img src= {{logoUrl}}>\r\n                        </a> \r\n                    </div>\r\n                    <button class=\"d-block d-md-none btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <i class=\"fas fa-bars\"></i>\r\n                        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n                    </button>\r\n                    <div class=\"fullscreen-menu-wrapper d-none d-md-block\">\r\n                        <menu-ui></menu-ui>\r\n                        <!-- <nav class='main-nav'>\r\n                            <ul class=\"nav-list\">\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['learn']\"> Learn </a>\r\n                                </li>\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['downloads']\"> Downloads </a>\r\n                                </li>\r\n                            </ul>\r\n                        </nav> -->\r\n                    </div>\r\n\r\n\r\n                  \r\n                </div>\r\n                <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                        <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n\r\n";

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(556);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.header-wrapper {\r\n  background-color: #2e302b; }\r\n  .header-wrapper .header-content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 5px 0px; }\r\n    .header-wrapper .header-content .logo-wrapper {\r\n      max-width: 200px; }\r\n    .header-wrapper .header-content .logo {\r\n      color: white;\r\n      font-size: 30px;\r\n      text-decoration: none; }\r\n", ""]);



/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"intro\">\r\n                        <h1 class='title'> What is MacroManager? </h1>\r\n                        <p> MacroManager is a tool that manages scripts written in Visual Basic for Applications (VBA). The desktop application allows users to easily create and distribute packages containing VBA macros to facilitate code reusability. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section-cards\">\r\n        <div class=\"card-collection\">\r\n            <div class=\"container\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-12 col-md-6\" *ngFor=\"let card of cards\">\r\n                        <card-ui\r\n                            [card]=\"card\"\r\n                            >\r\n                        </card-ui>\r\n                    </div>                \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n  </section>\r\n    \r\n  <section class=\"section-carousel\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                    <carousel-ui [slideUrls]=\"slideUrls\">\r\n                    </carousel-ui>  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     \r\n  </section>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(559);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.card-collection {\r\n  display: flex; }\r\n  .card-collection [class*=col-] {\r\n    display: flex; }\r\n\r\n.section-intro .intro {\r\n  text-align: center;\r\n  max-width: 700px;\r\n  margin: 0px auto; }\r\n  .section-intro .intro .title {\r\n    margin-bottom: 15px; }\r\n\r\n.section-cards {\r\n  background-color: #f4f4f4; }\r\n", ""]);



/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <!-- <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section> -->\r\n\r\n    <section class=\"section-example\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Package Installation </h1>\r\n                    <p> \r\n                        VBA is great for solving problems with automation and is especially valuable when macros are developed for reusability. MacroManager extends the value of your macros by providing a platform for storing and distributing reusable code. Packages are installed into an open Excel workbook by using the MacroManager desktop application. This tutorial will demonstrate how to install packages by using the “Hello, World.” package as an example. Once the package is installed you can use the macros like any other VBA code in your workbook.\r\n                    </p>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Prerequisites </h2>\r\n                            <ul>\r\n                                <li> MacroManager desktop application </li>\r\n                                <li> Microsoft Excel </li>\r\n                            </ul>\r\n                    </div>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Install the Macro package </h2>\r\n                         \r\n                            <p>\r\n                                Begin by opening the MacroManager desktop application. Use the search bar to find the package from the collection. Select the package to display its details and click install. Confirm that the contents of the package were installed successfully, by opening up the VBA editor. There should be a new subroutine called MacroManager_HelloWorld in a code module (Module1). Run the subroutine to see a popup message.\r\n                            </p>\r\n\r\n                            <!-- <div class=\"image-wrapper\">\r\n                                <img src=\"/images/macro-manager-images/macro_packages.png\">\r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(562);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n.page-wrapper .subtitle {\r\n  text-decoration: underline; }\r\n\r\n.page-wrapper .title {\r\n  margin-bottom: 20px; }\r\n\r\n.page-wrapper p {\r\n  max-width: 700px; }\r\n\r\n.page-wrapper .section-example {\r\n  background-color: #f4f4f4; }\r\n", ""]);



/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <ul class=\"nav-list\">\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['learn']\"> Learn </a>\r\n        </li>\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['downloads']\"> Download </a>\r\n        </li>\r\n    </ul>\r\n</nav>";

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(565);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html, body {\r\n  font-size: 14px;\r\n  background-color: white; }\r\n\r\nsection {\r\n  padding: 50px 0px; }\r\n\r\n.title {\r\n  font-size: 30px; }\r\n\r\n.title {\r\n  margin-bottom: 10px; }\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto; }\r\n\r\n:host(.footer) .nav-list {\r\n  flex-direction: column; }\r\n  :host(.footer) .nav-list .nav-item {\r\n    margin: 0px; }\r\n    :host(.footer) .nav-list .nav-item a {\r\n      background-color: transparent;\r\n      color: white;\r\n      padding: 0px; }\r\n      :host(.footer) .nav-list .nav-item a:hover {\r\n        text-decoration: underline; }\r\n\r\n:host(.mobile) .nav-list {\r\n  height: 100vh;\r\n  width: 100%;\r\n  flex-direction: column; }\r\n  :host(.mobile) .nav-list .nav-item {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    margin-bottom: 5px; }\r\n    :host(.mobile) .nav-list .nav-item a {\r\n      display: block;\r\n      padding: 5px 20px; }\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px; }\r\n  .nav-list .nav-item {\r\n    margin-left: 10px; }\r\n    .nav-list .nav-item a {\r\n      background-color: dimgray;\r\n      display: block;\r\n      padding: 5px 20px;\r\n      color: white;\r\n      text-decoration: none;\r\n      font-weight: 500;\r\n      transition: background-color 0.3s; }\r\n      .nav-list .nav-item a:hover {\r\n        background-color: white;\r\n        color: #2e302b; }\r\n", ""]);



/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['splash-screen']\">\r\n    <div [ngClass]=\"['content-wrapper', 'size-' + size]\">\r\n        <div class='img-wrapper'>\r\n            <img src = {{spinnerImgUrl}}>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(568);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, ".splash-screen img {\r\n  max-height: 100%;\r\n  max-width: 100%; }\r\n\r\n.splash-screen .content-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0.4; }\r\n\r\n.splash-screen .size-large {\r\n  background: gainsboro;\r\n  padding: 20px; }\r\n  .splash-screen .size-large .img-wrapper {\r\n    height: 100px; }\r\n\r\n.splash-screen .size-small {\r\n  padding: 2px; }\r\n  .splash-screen .size-small .img-wrapper {\r\n    height: 20px; }\r\n", ""]);



/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ProductInfoService": 82,
	"./ProductInfoService.ts": 82
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
webpackContext.id = 569;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Bootstrapper_1 = __webpack_require__(246);

var core_1 = __webpack_require__(1);

var platform_browser_1 = __webpack_require__(61);

var forms_1 = __webpack_require__(571);

var router_1 = __webpack_require__(266);

var ApplicationRoutes_1 = __webpack_require__(572);

var AppComponent_1 = __webpack_require__(182); // import {HomeComponent} from '../components/HomeComponent'
// import {HeaderComponent} from '../components/HeaderComponent'
// import {FooterComponent} from '../components/FooterComponent'
// import { LearnComponent } from '../components/LearnComponent';
// import { DownloadsComponent } from '../components/DownloadsComponent';
// import { CardComponent } from '../components/CardComponent';
// import { MenuComponent } from '../components/MenuComponent';
// import { CarouselComponent } from '../components/CarouselComponent';


function initializeApp(injector) {
  return function () {
    return Promise.resolve(); // return Bootstrapper.loadAsyncServices(injector)
    // .then(function(){
    //     console.log("ini success");
    // }, function(fail){
    //     console.log("init fail");
    //     console.log(fail);
    // })   
  };
}

exports.initializeApp = initializeApp;

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
    providers: [{
      provide: core_1.APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [core_1.Injector]
    }],
    bootstrap: [AppComponent_1.AppComponent]
  })], MainModuleLibrary);
  return MainModuleLibrary;
}();

exports.MainModuleLibrary = MainModuleLibrary;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {CustomerComponent} from '../components/CustomerComponent';

var HomeComponent_1 = __webpack_require__(184);

var LearnComponent_1 = __webpack_require__(185);

var DownloadsComponent_1 = __webpack_require__(183); //import {WelcomeComponent} from "../Component/WelcomeComponent";


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

/***/ 82:
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var AppConfig_1 = __webpack_require__(529);

var GateKeeperClient_1 = __webpack_require__(253);

var Card_1 = __webpack_require__(250);

var Installer_1 = __webpack_require__(547);

var ProductInfoService =
/** @class */
function () {
  function ProductInfoService(client) {
    this.gateKeeperClient = client;
    this.config = new AppConfig_1.AppConfig();
    this.productName = "MacroManager";
    this.logoUrl = this.config.getUploadsPath() + '/main/MacroManager Logo Stacked-light.png';
    this.email = "evandsilverstein@gmail.com";
    this.imageUrls = this.initializeImages();
    this.cards = this.initializeCards();
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

  ProductInfoService.prototype.getSpinnerUrl = function () {
    return this.logoUrl = this.config.getUploadsPath() + '/main/spinner-circle.gif';
  };

  ProductInfoService.prototype.getInstallers = function () {
    return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerVersionsQuery").then(function (data) {
      var dataItems = data.items;
      var installers = [];
      dataItems.forEach(function (item) {
        var installer = new Installer_1.Installer(item.title, item.version, item.filename);
        installers.push(installer);
      });
      return installers;
    });
  };

  ProductInfoService.prototype.DownLoadInstaller = function (version) {
    var _this = this;

    var queryData = {
      TargetVersion: version
    };
    return this.gateKeeperClient.dispatchQuery("GetClientApplicationInstallerQuery", queryData).then(function (data) {
      var arrayBuff = _this.base64ToArrayBuffer(data.attachment);

      _this.saveByteArray(data.filename, arrayBuff);
    });
  };

  ProductInfoService.prototype.base64ToArrayBuffer = function (base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);

    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }

    return bytes;
  };

  ProductInfoService.prototype.saveByteArray = function (filename, byte) {
    var blob = new Blob([byte], {
      type: "application/octet-stream"
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
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

  ProductInfoService.prototype.initializeCards = function () {
    var cards = [new Card_1.Card('Learn', 'Get started by completing a quick tutorial that demonstates how to install a package', '/learn'), new Card_1.Card('Download', 'Follow this link to get the latest version of this application', '/downloads')];
    return cards;
  };

  ProductInfoService = __decorate([core_1.Injectable({
    providedIn: 'root'
  }), __metadata("design:paramtypes", [GateKeeperClient_1.GateKeeperClient])], ProductInfoService);
  return ProductInfoService;
}();

exports.ProductInfoService = ProductInfoService;

/***/ })

},[[470,0,1]]]);
//# sourceMappingURL=app.js.map