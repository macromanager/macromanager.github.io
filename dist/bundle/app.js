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

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var AppSplashScreenManager_1 = __webpack_require__(249);

var AppComponent =
/** @class */
function () {
  function AppComponent(splashScreenManager) {
    this.isBusy = false;
    this.splashManager = splashScreenManager;
    this.splashManager.SetSplashScreenRequestHandler(this.SetBusyIndicator.bind(this));
  }

  AppComponent.prototype.SetBusyIndicator = function (isVisible) {
    this.isBusy = isVisible;
  };

  AppComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "app-ui",
    template: __webpack_require__(519),
    styles: [__webpack_require__(520)]
  }), __metadata("design:paramtypes", [AppSplashScreenManager_1.AppSplashScreenManager])], AppComponent);
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

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var ProductInfoService_1 = __webpack_require__(82);

var AppSplashScreenManager_1 = __webpack_require__(249);

var DownloadsComponent =
/** @class */
function () {
  function DownloadsComponent(prodInfoService, appSplashScreenManager) {
    this.productInfoService = prodInfoService;
    this.appSplashScreenManager = appSplashScreenManager;
  }

  DownloadsComponent.prototype.ngOnInit = function () {
    this.setDownloads();
  };

  DownloadsComponent.prototype.setDownloads = function () {
    var _this = this;

    this.appSplashScreenManager.requestSplashScreen(true);
    this.productInfoService.getInstallers().then(function (installers) {
      _this.installers = installers;

      _this.appSplashScreenManager.requestSplashScreen(false);
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
    template: __webpack_require__(549),
    styles: [__webpack_require__(550)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService, AppSplashScreenManager_1.AppSplashScreenManager])], DownloadsComponent);
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

exports.__esModule = true;

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
    template: __webpack_require__(558),
    styles: [__webpack_require__(559)]
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

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var LearnComponent =
/** @class */
function () {
  function LearnComponent() {}

  LearnComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "learn-page-ui",
    template: __webpack_require__(561),
    styles: [__webpack_require__(562)]
  })], LearnComponent);
  return LearnComponent;
}();

exports.LearnComponent = LearnComponent;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var IocRegistrations_1 = __webpack_require__(515);

var awilix_1 = __webpack_require__(248);

var GateKeeperClient_1 = __webpack_require__(254);

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

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var AppSplashScreenManager =
/** @class */
function () {
  function AppSplashScreenManager() {
    this.splashRequestIds = {};
  }

  AppSplashScreenManager.prototype.SetSplashScreenRequestHandler = function (callback) {
    this.handler = callback;
  };

  AppSplashScreenManager.prototype.requestSplashScreen = function (isVisible) {
    this.handler(isVisible);
  };

  AppSplashScreenManager = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], AppSplashScreenManager);
  return AppSplashScreenManager;
}();

exports.AppSplashScreenManager = AppSplashScreenManager;

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

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var Card_1 = __webpack_require__(251);

var CardComponent =
/** @class */
function () {
  function CardComponent() {}

  __decorate([core_1.Input(), __metadata("design:type", Card_1.Card)], CardComponent.prototype, "card");

  CardComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "card-ui",
    template: __webpack_require__(522),
    styles: [__webpack_require__(523)]
  })], CardComponent);
  return CardComponent;
}();

exports.CardComponent = CardComponent;

/***/ }),

/***/ 251:
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
    template: __webpack_require__(525),
    styles: [__webpack_require__(526)]
  })], CarouselComponent);
  return CarouselComponent;
}();

exports.CarouselComponent = CarouselComponent;

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

exports.__esModule = true;

var Customer_1 = __webpack_require__(528);

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
    template: __webpack_require__(529)
  })], CustomerComponent);
  return CustomerComponent;
}();

exports.CustomerComponent = CustomerComponent;

/***/ }),

/***/ 254:
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

var axios_1 = __webpack_require__(531);

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
    return axios_1["default"].get(url).then(function (response) {
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
      return axios_1["default"].post(url, query, {
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

exports.__esModule = true; //import {Customer} from '../models/Customer'

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
    template: __webpack_require__(552),
    styles: [__webpack_require__(553)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], FooterComponent);
  return FooterComponent;
}();

exports.FooterComponent = FooterComponent;

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

exports.__esModule = true; //import {Customer} from '../models/Customer'

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
    template: __webpack_require__(555),
    styles: [__webpack_require__(556)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], HeaderComponent);
  return HeaderComponent;
}();

exports.HeaderComponent = HeaderComponent;

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
    template: __webpack_require__(564),
    styles: [__webpack_require__(565)]
  })], MenuComponent);
  return MenuComponent;
}();

exports.MenuComponent = MenuComponent;

/***/ }),

/***/ 266:
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

var ProductInfoService_1 = __webpack_require__(82); // import {Card} from '../models/Card'


var SplashscreenComponent =
/** @class */
function () {
  function SplashscreenComponent(productInfoService) {
    this.size = "large";
    this.displayType = "block";
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

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "size");

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "displayType");

  SplashscreenComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    template: __webpack_require__(567),
    styles: [__webpack_require__(568)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], SplashscreenComponent);
  return SplashscreenComponent;
}();

exports.SplashscreenComponent = SplashscreenComponent;

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(189);

__webpack_require__(472);

__webpack_require__(226);

var Bootstrapper_1 = __webpack_require__(246);

Bootstrapper_1.Bootstrapper.initialize();

var platform_browser_dynamic_1 = __webpack_require__(227);

var MainModuleLibrary_1 = __webpack_require__(571); // var service = Bootstrapper.getInstanceByType(ProductInfoService);


var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var ModuleLoader_1 = __webpack_require__(516);

var awilix_1 = __webpack_require__(248); // const isClass = require('is-class')


var IocRegistrations =
/** @class */
function () {
  function IocRegistrations() {} // public static register(container: AwilixContainer){
  //   this.loadServices(container);
  //   this.loadComponents(container);
  // }


  IocRegistrations.loadComponents = function (container) {
    var ctx = __webpack_require__(518);

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
    var ctx = __webpack_require__(570);

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

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var path = __webpack_require__(517);

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

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": 182,
	"./AppComponent.ts": 182,
	"./CardComponent": 250,
	"./CardComponent.ts": 250,
	"./CarouselComponent": 252,
	"./CarouselComponent.ts": 252,
	"./CustomerComponent": 253,
	"./CustomerComponent.ts": 253,
	"./DownloadsComponent": 183,
	"./DownloadsComponent.ts": 183,
	"./FooterComponent": 263,
	"./FooterComponent.ts": 263,
	"./HeaderComponent": 264,
	"./HeaderComponent.ts": 264,
	"./HomeComponent": 184,
	"./HomeComponent.ts": 184,
	"./LearnComponent": 185,
	"./LearnComponent.ts": 185,
	"./MenuComponent": 265,
	"./MenuComponent.ts": 265,
	"./SplashscreenComponent": 266,
	"./SplashscreenComponent.ts": 266
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
webpackContext.id = 518;

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <header>\r\n        <header-ui class='header'></header-ui>\r\n    </header>\r\n    <main>\r\n        <splashscreen-ui id=\"appSplash\" [displayType]=\"'absolute'\" [size]=\"'large'\" [hidden]=\"!isBusy\"></splashscreen-ui>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <footer>\r\n        <footer-ui></footer-ui>\r\n    </footer>\r\n</div>\r\n";

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(521);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, ".app{display:flex;flex-direction:column;height:100vh}.app main{flex-grow:1;position:relative}.app main splashscreen-ui{position:absolute;z-index:1000;top:0px;bottom:0px;width:100%}.app main splashscreen-ui .splash-screen,.app main splashscreen-ui .content-wrapper{height:100%}\n", ""]);



/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<div class='my-card'>\r\n    <div class='img-wrapper'>\r\n        <img>\r\n    </div>\r\n    <div class='card-content'>\r\n        <div class='header'>\r\n            <!-- [routerLink]=\"['user', user.id, 'details']\" -->\r\n            <a [routerLink]=\"[card.route]\">\r\n                <h2 class='title'> {{card.title}} </h2>\r\n            </a>\r\n\r\n            <!-- <h2 class='title'> {{card.title}}  </h2> -->\r\n        </div>\r\n        <div class='body'>\r\n            <p> {{card.description}} </p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(524);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.my-card{text-align:center;box-shadow:0 8px 10px 0 rgba(0,0,0,0.06);padding:20px;margin:10px;background-color:#fff;width:100%}:host{display:flex;flex-grow:1}\n", ""]);



/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner\">\r\n              <div [class]=\"slide.class\" *ngFor=\"let slide of slides()\">\r\n                <div class=\"slide-wrapper\">\r\n                    <img class=\"d-block w-100\" [src]=\"slide.src\" [alt]=\"slide.alt\">\r\n                </div>\r\n              </div>\r\n        </div>              \r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <div class=\"carousel-icon-wrapper\">\r\n  \r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            \r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <div class=\"carousel-icon-wrapper\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n</div>";

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(527);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, ".carousel .slide-wrapper{padding:0px 40px}.carousel .carousel-icon-wrapper{background-color:black;padding:8px}.carousel .carousel-inner{margin:auto;width:80%;max-width:600px}\n", ""]);



/***/ }),

/***/ 528:
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

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"customer\">\r\n    Name:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerName\"><br /><br />\r\n    Code:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerCode\"><br /><br />\r\n    Amount:\r\n    <input type=\"text\" [(ngModel)]=\"CurrentCustomer.CustomerAmount\"><br /><br />\r\n</div>\r\n{{CurrentCustomer.CustomerName}}<br /><br />\r\n{{CurrentCustomer.CustomerCode}}<br /><br />\r\n{{CurrentCustomer.CustomerAmount}}<br /><br />";

/***/ }),

/***/ 530:
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

/***/ 548:
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

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <section class=\"section-downloads\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Windows Installers </h1>\r\n                    <p>\r\n                        This application is currently in the beta testing phase.\r\n                    </p>\r\n                    <ul class=\"installers\">\r\n                        <li *ngFor=\"let installer of installers\">\r\n                            <div class=\"item-wrapper\">\r\n                                <a (click)=\"installerClickHandler($event)\" class=\"installer\" attr.version=\"{{installer.version}}\">\r\n                                    {{installer.title}} {{installer.version}}\r\n                                </a>\r\n                                <splashscreen-ui [size]=\"'small'\" [hidden]=\"true\" ></splashscreen-ui>\r\n                            </div>\r\n                        </li>\r\n                    </ul>            \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(551);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.page-wrapper .subtitle{text-decoration:underline}.page-wrapper p{max-width:700px}.page-wrapper .installers li .item-wrapper{vertical-align:middle}.page-wrapper .installers li .item-wrapper>*{display:inline-block}.page-wrapper .installers a{color:#007bff;cursor:pointer;margin-right:5px}.page-wrapper .installers .img-wrapper{height:20px !important}\n", ""]);



/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\r\n    <section class=\"section-footer\">\r\n        <div class='footer-content'>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <div class=\"logo-wrapper\">\r\n                            <img src= {{logoUrl}}>\r\n                        </div>\r\n                        <p>{{email}}</p>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6\">\r\n                        <h3> Links </h3>\r\n                        <menu-ui class=\"footer\"></menu-ui>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       \r\n    </section>\r\n  \r\n</div>\r\n\r\n\r\n";

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(554);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.section-footer{background-color:#2e302b;color:#fff}.section-footer .logo-wrapper{max-width:200px}\n", ""]);



/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n        \r\n                <div class='header-content'>\r\n                    <div class=\"logo-wrapper\">\r\n                        <a (click)=\"menuClickHandler()\" class='logo' [routerLink]=\"['home']\">\r\n                            <img src= {{logoUrl}}>\r\n                        </a> \r\n                    </div>\r\n                    <button class=\"d-block d-md-none btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <i class=\"fas fa-bars\"></i>\r\n                        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n                    </button>\r\n                    <div class=\"fullscreen-menu-wrapper d-none d-md-block\">\r\n                        <menu-ui></menu-ui>\r\n                        <!-- <nav class='main-nav'>\r\n                            <ul class=\"nav-list\">\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['learn']\"> Learn </a>\r\n                                </li>\r\n                                <li class='nav-item'>\r\n                                    <a [routerLink]=\"['downloads']\"> Downloads </a>\r\n                                </li>\r\n                            </ul>\r\n                        </nav> -->\r\n                    </div>\r\n\r\n\r\n                  \r\n                </div>\r\n                <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                        <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n\r\n";

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(557);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.header-wrapper{background-color:#2e302b}.header-wrapper .header-content{display:flex;justify-content:space-between;align-items:center;padding:5px 0px}.header-wrapper .header-content .logo-wrapper{max-width:200px}.header-wrapper .header-content .logo{color:#fff;font-size:30px;text-decoration:none}\n", ""]);



/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"intro\">\r\n                        <h1 class='title'> What is MacroManager? </h1>\r\n                        <p> MacroManager is a tool that manages scripts written in Visual Basic for Applications (VBA). The desktop application allows users to easily create and distribute packages containing VBA macros to facilitate code reusability. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section-cards\">\r\n        <div class=\"card-collection\">\r\n            <div class=\"container\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-12 col-md-6\" *ngFor=\"let card of cards\">\r\n                        <card-ui\r\n                            [card]=\"card\"\r\n                            >\r\n                        </card-ui>\r\n                    </div>                \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n  </section>\r\n    \r\n  <section class=\"section-carousel\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                    <carousel-ui [slideUrls]=\"slideUrls\">\r\n                    </carousel-ui>  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     \r\n  </section>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(560);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.card-collection{display:flex}.card-collection [class*=col-]{display:flex}.section-intro .intro{text-align:center;max-width:700px;margin:0px auto}.section-intro .intro .title{margin-bottom:15px}.section-cards{background-color:#f4f4f4}\n", ""]);



/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <!-- <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section> -->\r\n\r\n    <section class=\"section-example\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Package Installation </h1>\r\n                    <p> \r\n                        VBA is great for solving problems with automation and is especially valuable when macros are developed for reusability. MacroManager extends the value of your macros by providing a platform for storing and distributing reusable code. Packages are installed into an open Excel workbook by using the MacroManager desktop application. This tutorial will demonstrate how to install packages by using the “Hello, World.” package as an example. Once the package is installed you can use the macros like any other VBA code in your workbook.\r\n                    </p>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Prerequisites </h2>\r\n                            <ul>\r\n                                <li> MacroManager desktop application </li>\r\n                                <li> Microsoft Excel </li>\r\n                            </ul>\r\n                    </div>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Install the Macro package </h2>\r\n                         \r\n                            <p>\r\n                                Begin by opening the MacroManager desktop application. Use the search bar to find the package from the collection. Select the package to display its details and click install. Confirm that the contents of the package were installed successfully, by opening up the VBA editor. There should be a new subroutine called MacroManager_HelloWorld in a code module (Module1). Run the subroutine to see a popup message.\r\n                            </p>\r\n\r\n                            <!-- <div class=\"image-wrapper\">\r\n                                <img src=\"/images/macro-manager-images/macro_packages.png\">\r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(563);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.page-wrapper .subtitle{text-decoration:underline}.page-wrapper .title{margin-bottom:20px}.page-wrapper p{max-width:700px}.page-wrapper .section-example{background-color:#f4f4f4}\n", ""]);



/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <ul class=\"nav-list\">\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['learn']\"> Learn </a>\r\n        </li>\r\n        <li class='nav-item'>\r\n            <a (click)=\"notifyNavigationOccured($event)\" [routerLink]=\"['downloads']\"> Download </a>\r\n        </li>\r\n    </ul>\r\n</nav>";

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(566);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}:host(.footer) .nav-list{flex-direction:column}:host(.footer) .nav-list .nav-item{margin:0px}:host(.footer) .nav-list .nav-item a{background-color:transparent;color:white;padding:0px}:host(.footer) .nav-list .nav-item a:hover{text-decoration:underline}:host(.mobile) .nav-list{height:100vh;width:100%;flex-direction:column}:host(.mobile) .nav-list .nav-item{margin:0px;padding:0px;margin-bottom:5px}:host(.mobile) .nav-list .nav-item a{display:block;padding:5px 20px}.nav-list{display:flex;list-style:none;padding:0px;margin:0px}.nav-list .nav-item{margin-left:10px}.nav-list .nav-item a{background-color:dimgray;display:block;padding:5px 20px;color:white;text-decoration:none;font-weight:500;transition:background-color 0.3s}.nav-list .nav-item a:hover{background-color:#fff;color:#2e302b}\n", ""]);



/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['splash-screen', 'displayType-' + displayType]\">\r\n    <div [ngClass]=\"['content-wrapper', 'size-' + size]\">\r\n        <div class='img-wrapper'>\r\n            <img src={{spinnerImgUrl}}>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(569);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(false);
// Module
exports.push([module.i, ".splash-screen img{max-height:100%;max-width:100%}.splash-screen .content-wrapper{display:flex;justify-content:center;align-items:center;opacity:0.4}.splash-screen .size-large{background:gainsboro}.splash-screen .size-large .img-wrapper{height:100px}.splash-screen .size-small .img-wrapper{height:20px}.displayType-absolute,.displayType-absolute .content-wrapper{height:100%}\n", ""]);



/***/ }),

/***/ 570:
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
webpackContext.id = 570;

/***/ }),

/***/ 571:
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

var Bootstrapper_1 = __webpack_require__(246);

var core_1 = __webpack_require__(1);

var platform_browser_1 = __webpack_require__(61);

var forms_1 = __webpack_require__(572);

var router_1 = __webpack_require__(267);

var ApplicationRoutes_1 = __webpack_require__(573);

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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true; //import {CustomerComponent} from '../components/CustomerComponent';

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

exports.__esModule = true;

var core_1 = __webpack_require__(1);

var AppConfig_1 = __webpack_require__(530);

var GateKeeperClient_1 = __webpack_require__(254);

var Card_1 = __webpack_require__(251);

var Installer_1 = __webpack_require__(548);

var ProductInfoService =
/** @class */
function () {
  function ProductInfoService(client) {
    this.gateKeeperClient = client;
    this.config = new AppConfig_1.AppConfig();
    this.productName = "MacroManager";
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

    return this.config.getUploadsPath() + '/main/MacroManager Logo Stacked-light.png';
  };

  ProductInfoService.prototype.getSpinnerUrl = function () {
    return this.config.getUploadsPath() + '/main/spinner-circle.gif';
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

},[[471,0,1]]]);
//# sourceMappingURL=app.js.map