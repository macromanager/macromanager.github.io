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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var AppRemoteManager_1 = __webpack_require__(520);

var AppComponent =
/** @class */
function () {
  function AppComponent(appRemote) {
    this.isBusy = false;
    this.notices = [];
    appRemote.setRemotable(this);
  }

  AppComponent.prototype.setBusyIndicator = function (isVisible) {
    console.log("in set busy");
    this.isBusy = isVisible;
  };

  AppComponent.prototype.setNotices = function (notices) {
    var _a;

    console.log("in notices");

    (_a = this.notices).push.apply(_a, notices);
  };

  AppComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "app-ui",
    template: __webpack_require__(521),
    styles: [__webpack_require__(522)]
  }), __metadata("design:paramtypes", [AppRemoteManager_1.AppRemoteManager])], AppComponent);
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

var Notice_1 = __webpack_require__(261);

var DownloadsComponent =
/** @class */
function () {
  function DownloadsComponent(prodInfoService) {
    this.notices = [];
    this.productInfoService = prodInfoService;
  }

  DownloadsComponent.prototype.ngOnInit = function () {
    this.setDownloads();
  };

  DownloadsComponent.prototype.setNotices = function () {
    var notice1 = new Notice_1.Notice("This may take a few seconds while the server boots up", "info");
    var notice2 = new Notice_1.Notice("This is taking forever...", "info");
    var notice3 = new Notice_1.Notice("...I hope you're not a recruiter", "info");
    this.notices.push(notice1);
    this.notices.push(notice2);
    this.notices.push(notice3);
    notice1.begin(0, 2000);
    notice2.begin(4000, 1000 * 60 * 60 * 24);
    notice3.begin(6000, 1000 * 60 * 60 * 24);
  };

  DownloadsComponent.prototype.setDownloads = function () {
    var _this = this;

    this.setNotices();
    this.isBusy = true;
    this.productInfoService.getInstallers().then(function (installers) {
      setTimeout(function () {
        _this.notices.forEach(function (notice) {
          notice.end();
        });

        _this.notices = [];
        _this.installers = installers;
        _this.isBusy = false;
      }, 0);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var IocRegistrations_1 = __webpack_require__(516);

var awilix_1 = __webpack_require__(248);

var GateKeeperClient_1 = __webpack_require__(252);

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
    template: __webpack_require__(524),
    styles: [__webpack_require__(525)]
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
    template: __webpack_require__(527),
    styles: [__webpack_require__(528)]
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

var __metadata = this && this.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Notice =
/** @class */
function () {
  function Notice(message, severity, endCallback) {
    if (severity === void 0) {
      severity = "info";
    }

    if (endCallback === void 0) {
      endCallback = null;
    }

    this._ended = false;
    this.message = message;
    this.severity = severity;
    this._endCallback = endCallback;
  }

  Object.defineProperty(Notice.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });

  Notice.prototype.begin = function (delayMs, durationMs) {
    var _this = this;

    if (delayMs === void 0) {
      delayMs = 0;
    }

    if (durationMs === void 0) {
      durationMs = 3000;
    }

    this._noticeDelayTimer = setTimeout(function () {
      if (_this._ended) {
        return;
      }

      _this._isVisible = true;
      _this._noticeDurationTimer = setTimeout(function () {
        _this.end();
      }, durationMs);
    }, delayMs);
  };

  Notice.prototype.end = function () {
    this._ended = true;
    clearTimeout(this._noticeDelayTimer);
    clearTimeout(this._noticeDurationTimer);
    this._isVisible = false;

    if (this._endCallback !== null) {
      this._endCallback(this);
    }
  };

  return Notice;
}();

exports.Notice = Notice;

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
    template: __webpack_require__(552),
    styles: [__webpack_require__(553)]
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
    this.setLogo();
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
    template: __webpack_require__(564),
    styles: [__webpack_require__(565)]
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

var Notice_1 = __webpack_require__(261);

var NoticeBarComponent =
/** @class */
function () {
  function NoticeBarComponent() {
    this.closeNoticeEvent = new core_1.EventEmitter();
  }

  NoticeBarComponent.prototype.ngOnInit = function () {// this.notice = new Notice("tes")
  };

  NoticeBarComponent.prototype.closeClickHandler = function (e) {
    console.log("exit clicked");
    this.closeNoticeEvent.emit("emitted");
  };

  __decorate([core_1.Input(), __metadata("design:type", Notice_1.Notice)], NoticeBarComponent.prototype, "notice", void 0);

  __decorate([core_1.Output(), __metadata("design:type", Object)], NoticeBarComponent.prototype, "closeNoticeEvent", void 0);

  NoticeBarComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "noticeBar-ui",
    template: __webpack_require__(567),
    styles: [__webpack_require__(568)]
  })], NoticeBarComponent);
  return NoticeBarComponent;
}();

exports.NoticeBarComponent = NoticeBarComponent;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var core_1 = __webpack_require__(1);

var PageWrapperComponent =
/** @class */
function () {
  function PageWrapperComponent() {
    this.isBusy = false;
  }

  __decorate([core_1.Input(), __metadata("design:type", Boolean)], PageWrapperComponent.prototype, "isBusy", void 0);

  __decorate([core_1.Input(), __metadata("design:type", Array)], PageWrapperComponent.prototype, "notices", void 0);

  PageWrapperComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "pageWrapper-ui",
    template: __webpack_require__(570),
    styles: [__webpack_require__(571)]
  })], PageWrapperComponent);
  return PageWrapperComponent;
}();

exports.PageWrapperComponent = PageWrapperComponent;

/***/ }),

/***/ 267:
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

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "size", void 0);

  __decorate([core_1.Input(), __metadata("design:type", String)], SplashscreenComponent.prototype, "displayType", void 0);

  SplashscreenComponent = __decorate([core_1.Component({
    
    //moduleId: __moduleName,
    selector: "splashscreen-ui",
    template: __webpack_require__(573),
    styles: [__webpack_require__(574)]
  }), __metadata("design:paramtypes", [ProductInfoService_1.ProductInfoService])], SplashscreenComponent);
  return SplashscreenComponent;
}();

exports.SplashscreenComponent = SplashscreenComponent;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(189);

__webpack_require__(473);

__webpack_require__(226);

var Bootstrapper_1 = __webpack_require__(246);

Bootstrapper_1.Bootstrapper.initialize();

var platform_browser_dynamic_1 = __webpack_require__(227);

var MainModuleLibrary_1 = __webpack_require__(577); // var service = Bootstrapper.getInstanceByType(ProductInfoService);


var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ModuleLoader_1 = __webpack_require__(517);

var awilix_1 = __webpack_require__(248); // const isClass = require('is-class')


var IocRegistrations =
/** @class */
function () {
  function IocRegistrations() {} // public static register(container: AwilixContainer){
  //   this.loadServices(container);
  //   this.loadComponents(container);
  // }


  IocRegistrations.loadComponents = function (container) {
    var ctx = __webpack_require__(519);

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
    var ctx = __webpack_require__(576);

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

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var path = __webpack_require__(518);

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

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": 182,
	"./AppComponent.ts": 182,
	"./CardComponent": 249,
	"./CardComponent.ts": 249,
	"./CarouselComponent": 251,
	"./CarouselComponent.ts": 251,
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
	"./NoticeBarComponent": 265,
	"./NoticeBarComponent.ts": 265,
	"./PageWrapperComponent": 266,
	"./PageWrapperComponent.ts": 266,
	"./SplashscreenComponent": 267,
	"./SplashscreenComponent.ts": 267
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
webpackContext.id = 519;

/***/ }),

/***/ 520:
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

var AppRemoteManager =
/** @class */
function () {
  function AppRemoteManager() {}

  AppRemoteManager.prototype.setRemotable = function (remotable) {
    this._remotable = remotable;
  };

  AppRemoteManager.prototype.setBusyIndicator = function (isVisible) {
    this._remotable.setBusyIndicator(isVisible);
  };

  AppRemoteManager.prototype.setNotices = function () {
    var notices = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      notices[_i] = arguments[_i];
    }

    this._remotable.setNotices(notices);
  };

  AppRemoteManager = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], AppRemoteManager);
  return AppRemoteManager;
}();

exports.AppRemoteManager = AppRemoteManager;

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n    <header>\r\n        <header-ui class='header'></header-ui>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n\r\n        <!-- <pageWrapper-ui [isBusy]=\"isBusy\" [notices]=\"notices\">\r\n            <router-outlet></router-outlet>\r\n        </pageWrapper-ui> -->\r\n    </main>\r\n    <footer>\r\n        <footer-ui></footer-ui>\r\n    </footer>\r\n</div>\r\n";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.app{display:flex;flex-direction:column;min-height:100vh}.app main{display:flex;flex:1 0 auto}.app header,.app main,.app footer{flex-shrink:0}.app footer{margin-top:auto}\n", ""]);



/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class='my-card'>\r\n    <div class='img-wrapper'>\r\n        <img>\r\n    </div>\r\n    <div class='card-content'>\r\n        <div class='header'>\r\n            <!-- [routerLink]=\"['user', user.id, 'details']\" -->\r\n            <a [routerLink]=\"[card.route]\">\r\n                <h2 class='title'> {{card.title}} </h2>\r\n            </a>\r\n\r\n            <!-- <h2 class='title'> {{card.title}}  </h2> -->\r\n        </div>\r\n        <div class='body'>\r\n            <p> {{card.description}} </p>\r\n        </div>\r\n    </div>\r\n</div>";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.my-card{text-align:center;box-shadow:0 8px 10px 0 rgba(0,0,0,0.06);padding:20px;background-color:#fff;width:100%}:host{display:flex;flex-grow:1}\n", ""]);



/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div class=\"carousel-controls d-none d-md-flex\">\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <div class=\"carousel-icon-wrapper\">\r\n  \r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            \r\n              </div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"carousel-control-wrapper\">\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <div class=\"carousel-icon-wrapper\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"carousel-inner\">\r\n              <div [class]=\"slide.class\" *ngFor=\"let slide of slides()\">\r\n                <div class=\"slide-wrapper\">\r\n                    <img class=\"d-block w-100\" [src]=\"slide.src\" [alt]=\"slide.alt\">\r\n                </div>\r\n              </div>\r\n        </div>              \r\n\r\n</div>";

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(529);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, ".carousel .carousel-controls{justify-content:flex-end;margin-bottom:10px}.carousel .carousel-controls .carousel-control-wrapper{display:inline-block}.carousel .carousel-controls .carousel-control-wrapper a{display:inline-block;position:static;width:auto;margin-left:5px}.carousel .carousel-controls .carousel-icon-wrapper{background-color:black;padding:8px}.carousel .carousel-inner{margin:auto}\n", ""]);



/***/ }),

/***/ 530:
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

/***/ 548:
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

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<pageWrapper-ui [isBusy]=\"isBusy\" [notices]=\"notices\" >\r\n    <div class=\"page page-downloads\">\r\n        <section class=\"section-downloads\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <h1 class=\"title\"> Windows Installers </h1>\r\n                        <p>\r\n                            This application is currently in the beta testing phase.\r\n                        </p>\r\n                        <ul class=\"installers\">\r\n                            <li *ngFor=\"let installer of installers\">\r\n                                <div class=\"item-wrapper\">\r\n                                    <a (click)=\"installerClickHandler($event)\" class=\"installer\" attr.version=\"{{installer.version}}\">\r\n                                        {{installer.title}} {{installer.version}}\r\n                                    </a>\r\n                                    <splashscreen-ui [size]=\"'small'\" [hidden]=\"true\" ></splashscreen-ui>\r\n                                </div>\r\n                            </li>\r\n                        </ul>            \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</pageWrapper-ui>\r\n\r\n      \r\n";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}:host{width:100%}:host,:host pageWrapper-ui{display:flex;width:100%}.page-downloads{display:flex;flex-direction:column;flex-grow:1}.page-downloads .subtitle{text-decoration:underline}.page-downloads p{max-width:700px}.page-downloads .installers li .item-wrapper{vertical-align:middle}.page-downloads .installers li .item-wrapper>*{display:inline-block}.page-downloads .installers a{color:#007bff;cursor:pointer;margin-right:5px}.page-downloads .installers .img-wrapper{height:20px !important}\n", ""]);



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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.section-footer{background-color:#2e302b;color:#fff}.section-footer .logo-wrapper{max-width:200px}.section-footer .logo-wrapper img{margin:0px -25px}\n", ""]);



/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header-wrapper\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n        \r\n                <div class='header-content'>\r\n                    <div class=\"logo-wrapper\">\r\n                        <a (click)=\"menuClickHandler()\" class='logo' [routerLink]=\"['home']\">\r\n                            <img src= {{logoUrl}}>\r\n                        </a> \r\n                    </div>\r\n                    <button class=\"btn-menu d-block d-md-none btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMobileMenu\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n                            <i class=\"fas fa-bars\"></i>\r\n                        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n                    </button>\r\n                    <div class=\"fullscreen-menu-wrapper d-none d-md-block\">\r\n                        <menu-ui></menu-ui>\r\n                    </div>\r\n\r\n\r\n                  \r\n                </div>\r\n                <div id=\"collapseMobileMenu\" class=\"mobile-menu-wrapper collapse\">\r\n                        <menu-ui (navigationEvent)=\"menuClickHandler()\" class=\"mobile\"></menu-ui>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n</div>\r\n\r\n";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.header-wrapper{background-color:#2e302b}.header-wrapper .header-content{display:flex;justify-content:space-between;align-items:center;padding:5px 0px}.header-wrapper .header-content .logo-wrapper{max-width:200px}.header-wrapper .header-content .logo{margin:0px -25px;color:#fff;font-size:30px;text-decoration:none}.header-wrapper .header-content .btn-menu{padding:10px;background-color:white;color:#2e302b;border-width:0px;outline:none}.header-wrapper .header-content .btn-menu i{font-size:20px}.header-wrapper .header-content .btn-menu:focus{outline-width:0;outline:none;box-shadow:none}\n", ""]);



/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<div class=\"page page-home\">\r\n  <section class=\"section-intro\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"intro\">\r\n                        <h1 class='title'> What is MacroManager? </h1>\r\n                        <p> MacroManager is a tool that manages scripts written in Visual Basic for Applications (VBA). The desktop application allows users to easily create and distribute packages containing VBA macros to facilitate code reusability. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"section-cards\">\r\n        <div class=\"card-collection\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12 col-md-6\" *ngFor=\"let card of cards\">\r\n                        <card-ui\r\n                            [card]=\"card\"\r\n                            >\r\n                        </card-ui>\r\n                    </div>                \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n  </section>\r\n    \r\n  <section class=\"section-carousel\">\r\n      <div class=\"container\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                    <carousel-ui [slideUrls]=\"slideUrls\">\r\n                    </carousel-ui>  \r\n              </div>\r\n          </div>\r\n      </div>\r\n     \r\n  </section>\r\n\r\n</div>\r\n";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}:host{width:100%}.card-collection{display:flex}.card-collection [class*=col-]{display:flex}.section-intro .intro{text-align:center;max-width:700px;margin:0px auto}.section-intro .intro .title{margin-bottom:15px}.section-cards{background-color:#f4f4f4}@media (max-width: 768px){.section-cards card-ui{margin:10px 0px}}\n", ""]);



/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div class=\"page page-learn\">\r\n    <section class=\"section-example\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h1 class=\"title\"> Package Installation </h1>\r\n                    <p> \r\n                        VBA is great for solving problems with automation and is especially valuable when macros are developed for reusability. MacroManager extends the value of your macros by providing a platform for storing and distributing reusable code. Packages are installed into an open Excel workbook by using the MacroManager desktop application. This tutorial will demonstrate how to install packages by using the “Hello, World.” package as an example. Once the package is installed you can use the macros like any other VBA code in your workbook.\r\n                    </p>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Prerequisites </h2>\r\n                            <ul>\r\n                                <li> MacroManager desktop application </li>\r\n                                <li> Microsoft Excel </li>\r\n                            </ul>\r\n                    </div>\r\n                    <div class=\"step\">\r\n                            <h2 class=\"subtitle\"> Install the Macro package </h2>\r\n                         \r\n                            <p>\r\n                                Begin by opening the MacroManager desktop application. Use the search bar to find the package from the collection. Select the package to display its details and click install. Confirm that the contents of the package were installed successfully, by opening up the VBA editor. There should be a new subroutine called MacroManager_HelloWorld in a code module (Module1). Run the subroutine to see a popup message.\r\n                            </p>\r\n\r\n                            <!-- <div class=\"image-wrapper\">\r\n                                <img src=\"/images/macro-manager-images/macro_packages.png\">\r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>  \r\n</div>\r\n      \r\n";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}:host{width:100%}:host{background-color:#f4f4f4}.page-learn .subtitle{text-decoration:underline}.page-learn .title{margin-bottom:20px}.page-learn p{max-width:700px}\n", ""]);



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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}:host(.footer) .nav-list{flex-direction:column}:host(.footer) .nav-list .nav-item{margin:0px}:host(.footer) .nav-list .nav-item a{background-color:transparent;color:white;padding:0px}:host(.footer) .nav-list .nav-item a:hover{text-decoration:underline}:host(.mobile) .nav-list{height:100vh;width:100%;flex-direction:column}:host(.mobile) .nav-list .nav-item{margin:0px;padding:0px;margin-bottom:5px}:host(.mobile) .nav-list .nav-item a{display:block;padding:5px 20px}.nav-list{display:flex;list-style:none;padding:0px;margin:0px}.nav-list .nav-item{margin-left:10px}.nav-list .nav-item a{background-color:dimgray;display:block;padding:5px 20px;color:white;text-decoration:none;font-weight:500;transition:background-color 0.3s}.nav-list .nav-item a:hover{background-color:#fff;color:#2e302b}\n", ""]);



/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['notice-bar']\">\r\n    <div [ngClass]=\"['severity-colour', 'severity-colour-' + notice.severity]\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"item-wrapper\">\r\n                        <div class=\"content-wrapper\">\r\n                            <!-- <i [ngClass]=\"['severity-' + notice.severity + '-symbol']\"></i>         -->\r\n                            <p>{{notice.message}}</p>\r\n                        </div>\r\n                        <a (click)=\"closeClickHandler($event)\" class=\"my-close\"></a>\r\n                        <!-- <i (click)=\"closeClickHandler()\" class=\"my-close\"></i> -->\r\n                    </div>\r\n                    <!-- <i [ngClass]=\"['severity-' + notice.severity + '-symbol']\"></i> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

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

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0px;padding:0px;font-size:14px;background-color:#fff}section{padding:50px 0px}.my-close:before,.severity-info-symbol:before,.severity-slow-symbol:before{font-family:\"Font Awesome 5 Free\";vertical-align:middle;font-weight:900;font-size:30px;font-style:normal}.my-close{cursor:pointer}.my-close:before{font-size:25px;content:\"\\f057\"}.severity-info-symbol:before,.severity-slow-symbol:before{line-height:50px;font-size:50px}.severity-info-symbol:before{content:\"\\f05a\"}.severity-slow-symbol:before{content:\"\\f252\"}.title{font-size:30px}.title{margin-bottom:10px}img{width:100%;height:auto}.notice-bar .item-wrapper{display:flex;align-items:center;justify-content:space-between}.notice-bar .content-wrapper{display:flex;align-items:center;justify-content:flex-start;padding:10px 0px}.notice-bar .content-wrapper p{padding-right:10px;margin:0px;color:white}.notice-bar .severity-colour{background-color:#966d96}.notice-bar .serverity-warning{background-color:#ff0}.notice-bar .serverity-error{background-color:red}\n", ""]);



/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['page-wrapper']\">\r\n    <ul class=\"notice-collection\">\r\n        <li *ngFor=\"let notice of notices\" [hidden]=\"!notice.isVisible\">\r\n            <noticeBar-ui (closeNoticeEvent)=\"notice.end()\" [hidden]=\"!notice.isVisible\" [notice]=\"notice\"></noticeBar-ui>\r\n        </li>\r\n    </ul>      \r\n    <div class=\"content\">\r\n        <splashscreen-ui id=\"pageSplash\" [displayType]=\"'absolute'\" [size]=\"'large'\" [hidden]=\"!isBusy\"></splashscreen-ui>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    \r\n</div>";

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(572);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, ".page-wrapper{height:100%;display:flex;flex-direction:column;width:100%}.page-wrapper .notice-collection{padding:0px;margin:0px;list-style:none;background-color:#2e302b}.page-wrapper .notice-collection li:not(:first-child){margin-top:3px}.page-wrapper .content{position:relative;flex-grow:1;min-height:250px}.page-wrapper .content splashscreen-ui{position:absolute;z-index:100;top:0px;bottom:0px;width:100%}\n", ""]);



/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"['splash-screen', 'displayType-' + displayType]\">\r\n    <div [ngClass]=\"['content-wrapper', 'size-' + size]\">\r\n        <div class='img-wrapper'>\r\n            <img src={{spinnerImgUrl}}>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(575);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)(false);
// Module
exports.push([module.i, ".splash-screen img{max-height:100%;max-width:100%}.splash-screen .content-wrapper{display:flex;justify-content:center;align-items:center;opacity:0.4}.splash-screen .size-large{background:gainsboro}.splash-screen .size-large .img-wrapper{height:100px}.splash-screen .size-small .img-wrapper{height:20px}.displayType-absolute,.displayType-absolute .content-wrapper{height:100%}\n", ""]);



/***/ }),

/***/ 576:
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
webpackContext.id = 576;

/***/ }),

/***/ 577:
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

var forms_1 = __webpack_require__(578);

var router_1 = __webpack_require__(268);

var ApplicationRoutes_1 = __webpack_require__(579);

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

/***/ 579:
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

var AppConfig_1 = __webpack_require__(530);

var GateKeeperClient_1 = __webpack_require__(252);

var Card_1 = __webpack_require__(250);

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

},[[472,0,1]]]);
//# sourceMappingURL=app.js.map