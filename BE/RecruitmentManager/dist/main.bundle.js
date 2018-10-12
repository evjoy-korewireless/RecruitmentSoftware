webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [ngStyle]=\"{'background': getColorB()}\">\r\n    <div [(hidden)]=\"login\" class=\"sidebar\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <div class=\"main-panel\" >\r\n        <app-navbar [hidden]=\"login\"></app-navbar>\r\n        <router-outlet ></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    }
    AppComponent.prototype.ngOnChanges = function () {
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            _this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    //window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
        this.login = localStorage.getItem('userLogin') == 'true' ? false : true;
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AppComponent.prototype.getColorB = function () {
        if (this.login) {
            return '#063A61';
        }
        else {
            return 'transparent';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__table_list_candidate_element_candidate_element_component__ = __webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_google_map_services__ = __webpack_require__("../../../../../src/app/services/google-map.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_FilterUtils__ = __webpack_require__("../../../../../src/app/lib/FilterUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__circular_progress_circular_progress_component__ = __webpack_require__("../../../../../src/app/circular-progress/circular-progress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__circular_progress_circular_progress_component__["a" /* CircularProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_13__table_list_candidate_element_candidate_element_component__["a" /* CandidateElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_highcharts__["a" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_google_map_services__["a" /* GoogleAPIService */], __WEBPACK_IMPORTED_MODULE_15__services_api_services__["a" /* ApiServices */], __WEBPACK_IMPORTED_MODULE_16__lib_FilterUtils__["a" /* FilterUtils */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_19__services_index__["b" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_19__services_index__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'candidate-details', component: __WEBPACK_IMPORTED_MODULE_5__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/circular-progress/circular-progress.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"12vw\" height=\"12vw\" style=\"margin-top:0px\">\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#074D80\" stroke-width=\"7%\" />\r\n    <circle cx=\"50%\" cy=\"50%\" r=\"45%\" fill=\"none\" stroke=\"#D83F45\" stroke-width=\"7%\" [attr.stroke-dasharray]=\"totalFill+'vw'\"\r\n    [attr.stroke-dashoffset]=\"val1\" style=\"transition: .6s linear\"/>\r\n    <text x=\"50%\" y=\"50%\" font-family=\"Roboto\" font-size=\"2.5vw\" fill=\"#4A4A4A\" text-anchor=\"middle\" font-weight=\"500\">{{title}}</text>\r\n    <text x=\"50%\" y=\"60%\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"#4A4A4A\" text-anchor=\"middle\">{{subtitle}}</text>\r\n</svg>"

/***/ }),

/***/ "../../../../../src/app/circular-progress/circular-progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularProgressComponent = (function () {
    function CircularProgressComponent() {
        this.totalFill = 34;
    }
    CircularProgressComponent.prototype.ngOnInit = function () {
        this.init();
    };
    CircularProgressComponent.prototype.init = function () {
        this.circle = this.calculateStrokeValue(50, 100);
    };
    CircularProgressComponent.prototype.calculateStrokeValue = function (value, total) {
        this.val1 = (((value / total)) * this.totalFill) + 'vw';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CircularProgressComponent.prototype, "subtitle", void 0);
    CircularProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-circular-progress',
            template: __webpack_require__("../../../../../src/app/circular-progress/circular-progress.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CircularProgressComponent);
    return CircularProgressComponent;
}());

//# sourceMappingURL=circular-progress.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"/candidate-details\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.atollsolutions.com/\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.atollsolutions.com/\">gadgeon Solutions</a>\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top\" style=\"left: 100px;\">\r\n    <div class=\"container-fluid\" style=\"margin:0px!important\">\r\n        <div class=\"navbar-header navbar-static-top\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n            </button>\r\n        </div>\r\n        <form class=\"navbar-form\" role=\"search\">\r\n            <div class=\"form-group navbar-left atol-search\">\r\n                <button type=\"submit\">\r\n                    <i class=\"material-icons\">search</i>\r\n                    <div class=\"ripple-container\"></div>\r\n                </button>\r\n                <input type=\"text\" placeholder=\"Global Search\">\r\n            </div>\r\n\r\n        </form>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right gadgeon-nav-rigt navatoll\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <img src=\"../../../assets/img/icons/notification.svg\" alt=\"\" height=\"25vw\" width=\"25vw\">\r\n                        <span class=\"notification\" *ngIf=\"notificationCount>0\">{{notificationCount}}</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu notificationheader\" *ngIf=\"notificationCount>0\">\r\n                        <li>\r\n                            <div class=\"row title\">\r\n                                <div class=\"col-xs-10\">\r\n                                    <p>Alerts</p>\r\n                                </div>\r\n                                <div class=\"col-xs-2\">\r\n                                    <i class=\"material-icons\">settings</i>\r\n                                </div>\r\n                            </div>\r\n                            <hr style=\"margin:0px;\">\r\n                        </li>\r\n                        <li id='notificationbar' *ngFor=\"let item of notificationList\">\r\n                            <a (click)=\"readNotification({type:0,toolid:item.toolid,partnumber:item.partnumber,vendor:item.suppliername,flag0:item.battery_notification,flag1:item.die_missing_notification,flag2:item.die_life_notification,flag3:item.die_removal_notification})\"\r\n                                *ngIf=\"item.battery_notification =='1'\">Battery notification {{item.toolid}} <hr></a>\r\n                            <a (click)=\"readNotification({type:1,toolid:item.toolid,partnumber:item.partnumber,vendor:item.suppliername,flag0:item.battery_notification,flag1:item.die_missing_notification,flag2:item.die_life_notification,flag3:item.die_removal_notification})\"\r\n                                *ngIf=\"item.die_missing_notification =='1'\">{{item.toolid}} is Missing<hr></a>\r\n                            <a (click)=\"readNotification({type:2,toolid:item.toolid,partnumber:item.partnumber,vendor:item.suppliername,flag0:item.battery_notification,flag1:item.die_missing_notification,flag2:item.die_life_notification,flag3:item.die_removal_notification})\"\r\n                                *ngIf=\"item.die_life_notification=='1'\">Die Life Notification {{item.toolid}}<hr></a>\r\n                            <a (click)=\"readNotification({type:3,toolid:item.toolid,partnumber:item.partnumber,vendor:item.suppliername,flag0:item.battery_notification,flag1:item.die_missing_notification,flag2:item.die_life_notification,flag3:item.die_removal_notification})\"\r\n                                *ngIf=\"item.die_removal_notification=='1'\">{{item.toolid}} is removed<hr></a>\r\n                        </li>\r\n                        <li>\r\n                            <hr style=\"margin:0px;\">\r\n                            <div class=\"row title\">\r\n                                <a href=\"#\">View All Alerts</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <img src=\"../../../assets/img/icons/user.svg\" alt=\"\" height=\"25vw\" width=\"25vw\">\r\n                        <label for=\"username\" style=\"font-size:150%!important;font-weight: 500!important\">{{username}}</label>\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <a>Account Setting</a>\r\n                        </li>\r\n                        <li id='user'>\r\n                            <a (click)=\"logout()\">Logout</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(location, element, apicall, router) {
        this.element = element;
        this.apicall = apicall;
        this.router = router;
        this.location = location;
        this.sidebarVisible = false;
        this.bindNotification();
    }
    NavbarComponent.prototype.readNotification = function (data) {
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.username = localStorage.getItem("username");
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.bindNotification();
    };
    NavbarComponent.prototype.bindNotification = function () {
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('adminLoginGad');
        localStorage.removeItem('gadLoginTocken');
        location.reload();
        this.router.navigateByUrl('/');
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_services__["a" /* ApiServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === "function" && _d || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white path{\r\n        fill: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li>\r\n                <p style=\"color: white;font-size: 15px;font-weight: 500;padding: 20%;\">\r\n                    Gadgeon\r\n                </p>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} navbar-collapse\" >\r\n                <a [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.iconFlag\">\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <i class=\"material-icons\" *ngIf=\"menuItem.iconFlag\">{{menuItem.icon}}</i>\r\n                    <br *ngIf=\"menuItem.iconFlag\">\r\n                    <p style=\"margin-top:2px;margin-bottom: 2px;font-size: 100%\" *ngIf=\"menuItem.iconFlag\">{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/candidate-details', title: 'Home', icon: 'home', class: '', imageWhite: '', imageDull: '', iconFlag: true },
    { path: '/user-profile', title: 'Register', icon: 'playlist_add', class: '', imageWhite: '', imageDull: '', iconFlag: localStorage.getItem("adminLoginGad") == "true" ? true : false }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('app.config');
var AppConfig = {
    endpoints: {
        atollEndpoint: 'http://18.235.147.822/',
        serverIp: 'http://18.235.147.82/student'
    }
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".low-header{\r\n    vertical-align: 0px!important;\r\n    bottom: 0px!important;;\r\n    padding: 0px!important;;\r\n    margin: 0px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content gadgeon-dashboard gadgeon-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-8\" style=\"margin:0px!important\">\r\n            <h5>Gadgeon Home</h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <section class=\"row gadgeon-widget\">\r\n            <div class=\"panel panel-collapse \">\r\n                <header class=\"panel-heading\">\r\n                    <label class=\"panel-title\">Recruitment Details</label>\r\n                </header>\r\n                <section class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#074D80\">{{global.totalproduction}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray\">\r\n                                        <label>Selected</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#F6AE2C\">{{global.totalStorage}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Pending</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#86BBD8\">{{global.totalRepair}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"/#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Rejected</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#F2641A\">{{global.totalMissing}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Kore Pending</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <p class=\"text-primary\" style=\"color:#429EA6\">{{global.totalunassigned}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"text-center\">\r\n                                    <a href=\"#/candidate-details\" class=\"text-gray \">\r\n                                        <label>Kore Accepted</label>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"global.totalCount > 0\">\r\n                        <div class=\"row\" style=\"width: 96%;margin: 2%;height: 2vh;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#074D80;\" [ngStyle]=\"{width: global.prodPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background: #F6AE2C\" [ngStyle]=\"{width: global.storePercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#86BBD8\" [ngStyle]=\"{width: global.repPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background:#F2641A\" [ngStyle]=\"{width: global.missingPercent}\">\r\n                            </div>\r\n                            <div class=\"progress-bar\" role=\"progressbar\" style=\"background: #429EA6\" [ngStyle]=\"{width: global.unUsPercent}\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-8\">\r\n            <section class=\"row gadgeon-widget\" style=\"margin:0px!important\">\r\n                <div class=\"panel panel-collapse\">\r\n                    <header class=\"panel-heading\">\r\n                        <label class=\"panel-title\">Candidate Details Overview Gadgeon</label>\r\n                    </header>\r\n                    <section class=\"panel-body gadgeon-section\">\r\n                        <div class=\"row\" style=\"margin-left:7%\">\r\n                            <div class=\"col-xs-6\">\r\n                                <app-circular-progress [title]=\"'05'\" [subtitle]=\"'vendors'\"></app-circular-progress>\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                                <svg width=\"100%\" height=\"15%\">\r\n                                    <rect x=\"1vw\" y=\"2vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#074D80;stroke:#074D80;stroke-width:2;\" />\r\n                                    <rect x=\"1vw\" y=\"10vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#D83F45;stroke:#D83F45;stroke-width:2;\" />\r\n                                    <text x=\"5vw\" y=\"4.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Selected</text>\r\n                                    <text x=\"5vw\" y=\"12.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Pending</text>\r\n                                </svg>\r\n                            </div>\r\n                            <div class=\"col-xs-6\">\r\n                            </div>\r\n                        </div>\r\n                    </section>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <section class=\"col-xs-4 gadgeon-widget\" style=\"margin:0px!important\">\r\n            <div class=\"panel panel-collapse\">\r\n                <header class=\"panel-heading\">\r\n                    <label class=\"panel-title\">Candidate Details Overview Kore</label>\r\n                </header>\r\n                <div class=\"row\">\r\n                    <section class=\"panel-body text-center gadgeon-section\" id=\"DivDailyRTUsageChart\">\r\n                        <app-circular-progress [title]=\"'14'\" [subtitle]=\"'parts'\"></app-circular-progress>\r\n                    </section>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-left:5vw\">\r\n                    <svg width=\"100%\" height=\"15%\">\r\n                        <rect x=\"1vw\" y=\"2vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#074D80;stroke:#074D80;stroke-width:2;\" />\r\n                        <rect x=\"1vw\" y=\"10vh\" width=\"2vw\" height=\"2vw\" style=\"fill:#D83F45;stroke:#D83F45;stroke-width:2;\" />\r\n                        <text x=\"5vw\" y=\"4.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Selected</text>\r\n                        <text x=\"5vw\" y=\"12.5vh\" font-family=\"Roboto\" font-size=\"1vw\" fill=\"gray\">Pending</text>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(apicall, router, global) {
        this.apicall = apicall;
        this.router = router;
        this.global = global;
        this.storageAddedValue = 3;
        this.prodAddedValue = 5;
        this.repairAddedValue = 10;
        this.isRepairAdded = true;
        this.isStorageAdded = true;
        this.isProdAdded = true;
        this.radius = 54;
        this.totalFill = 124;
        localStorage.setItem('selectedTab', 'Production');
        if (localStorage.getItem('userLogin') == 'true') {
            this.init();
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    DashboardComponent.prototype.UpdateTab = function (data) {
        console.log('Emitting', data.target.textContent);
        localStorage.setItem('selectedTab', data.target.textContent);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.init();
    };
    DashboardComponent.prototype.init = function () {
        this.circle1 = this.calculateStrokeValue(80, 100);
        this.circle2 = this.calculateStrokeValue(50, 100);
    };
    DashboardComponent.prototype.calculateStrokeValue = function (value, total) {
        return ({ dasharray: this.totalFill * (value / total), dashoffset: this.totalFill - (this.totalFill * (value / total)) });
    };
    DashboardComponent.prototype.setTab = function (val) {
        this.global.activeTab = val;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "selectedOut", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/lib/FilterUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterUtils = (function () {
    function FilterUtils() {
        this.returnval = [];
    }
    FilterUtils.prototype.FilterProductionData = function (data, type, value) {
        var _this = this;
        data.forEach(function (element) {
            switch (type) {
                case 'toolId':
                    if (element.toolId == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'partNumber':
                    if (element.partNumber == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'nodeId':
                    if (element.nodeId.toString() == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'prodStatusCount':
                    if (element.prodStatusCount.toString() == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'vendorName':
                    if (element.vendorName == value) {
                        _this.returnval.push(element);
                    }
                    break;
                case 'date':
                    if (element.date == value) {
                        _this.returnval.push(element);
                    }
                    break;
            }
            return _this.returnval;
        });
    };
    FilterUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FilterUtils);
    return FilterUtils;
}());

//# sourceMappingURL=FilterUtils.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 4% ;overflow: hidden!important;\">\r\n    <section class=\"container\" style=\"background: white;height: 540px;width: 360px\">\r\n        <div class=\"row\">\r\n            <h2 style=\"margin: 5%; color:#074D80!important;font-weight: 500;font-size: 200%!important\">\r\n                Gadgeon Smart Systems\r\n            </h2>\r\n        </div>\r\n        <div class=\"row\" style=\"margin:15%\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required style=\"color:#074D80!important;font-weight: 500!important;font-size: 150%!important\"\r\n                    />\r\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required style=\"color:#074D80!important;font-weight: 600!important;font-size: 200%!important\"\r\n                    />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-sm btn-github\" style=\"background:#074D80;text-transform: unset!important;font-size: 100%\">\r\n                        Sign In\r\n                    </button>\r\n                    <button class=\"btn btn-sm btn-github navbar-right\" style=\"background:#074D80;text-transform: unset!important;font-size: 100%\" (click)=\"Register()\">\r\n                        Register\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details');
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.Register = function () {
        this.router.navigateByUrl('/user-profile');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.model.username == "hr@gadgeon.com" && this.model.password == "Hr@Gad#2018") {
            localStorage.setItem("adminLoginGad", "true");
            localStorage.setItem('userLogin', 'true');
            localStorage.setItem('username', this.model.username);
            this.loading = true;
            this.router.initialNavigation();
            location.reload();
            this.router.navigateByUrl('/candidate-details');
        }
        else {
            this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
                console.log(data["body"]);
                if (data["body"]['succuss'] == true) {
                    console.log("Success");
                    localStorage.setItem('userLogin', 'true');
                    localStorage.setItem('username', _this.model.username);
                    _this.loading = true;
                    localStorage.setItem("gadLoginTocken", data["body"]["token"]);
                    _this.router.initialNavigation();
                    location.reload();
                    _this.router.navigateByUrl('/candidate-details');
                }
            }, function (error) {
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiServices = (function () {
    function ApiServices(http) {
        this.http = http;
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */].endpoints["atollEndpoint"];
        this.serverIp = __WEBPACK_IMPORTED_MODULE_2__config_app_config__["a" /* AppConfig */].endpoints["serverIp"];
    }
    ApiServices.prototype.getCandidateList = function () {
        return this.http.get(this.serviceUrl + "opcode=ATOP002&commcode=ATCC003&die_state=1");
    };
    ApiServices.prototype.submitCandidateRecord = function (userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.serverIp, userData, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    ApiServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiServices);
    return ApiServices;
    var _a;
}());

//# sourceMappingURL=api.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var url = "http://18.235.147.82/login";
        var data = {
            "email": username,
            "password": password
        };
        var userlogin;
        return this.http.post(url, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/global.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__("../../../../events/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = (function () {
    function GlobalService(apicall) {
        this.apicall = apicall;
        this.activeTab = 'production';
        this.dropdownChanged = new __WEBPACK_IMPORTED_MODULE_2_events__["EventEmitter"]();
        this.dropdownPeriods = ['Last 24 Hours', 'Last Week', 'Last Month', 'Last Year'];
        this.selectedPeriod = this.dropdownPeriods[0];
        this.totalCount = 0;
        this.totalproduction = 0;
        this.totalStorage = 0;
        this.totalRepair = 0;
        this.totalMissing = 0;
        this.totalunassigned = 0;
        this.init();
    }
    GlobalService.prototype.selectSortPeridDropdown = function (period) {
        this.selectedPeriod = period;
    };
    GlobalService.prototype.init = function () {
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object])
    ], GlobalService);
    return GlobalService;
    var _a;
}());

//# sourceMappingURL=global.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/google-map.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleAPIService = (function () {
    function GoogleAPIService(jsonp) {
        var _this = this;
        this.jsonp = jsonp;
        this.googleReadyObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.jsonp
            .get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAWoCHGzZmNSFKhEbDjsughQ4x8BXmNvT4&callback=JSONP_CALLBACK")
            .retry()
            .subscribe(function (res) {
            if (res.status === 200) {
                _this.googleReadyObservable.complete();
            }
        });
    }
    ;
    GoogleAPIService.prototype.googleReady = function () {
        return this.googleReadyObservable;
    };
    ;
    GoogleAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]) === "function" && _a || Object])
    ], GoogleAPIService);
    return GoogleAPIService;
    var _a;
}());

//# sourceMappingURL=google-map.services.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_services__ = __webpack_require__("../../../../../src/app/services/global.services.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__global_services__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".atol-element-lg{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 200%;\r\n}\r\n.atol-element-sm{\r\n    color: gray;\r\n    margin-left:5%;\r\n    font-size: 150%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"row atolltablerow\">\r\n        <div class=\"col-xs-2\">\r\n            Priyesh\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n            College\r\n        </div>\r\n        <div class=\"col-xs-1\">\r\n            YOP\r\n        </div>\r\n        <div class=\"col-xs-1\">\r\n            80%\r\n        </div>\r\n        <div class=\"col-xs-1\">\r\n            80%\r\n        </div>\r\n        <div class=\"col-xs-1\">\r\n            80%\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n            73568999999\r\n        </div>\r\n        <div class=\"col-xs-2\">\r\n            pk@gmail.com\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/table-list/candidate-element/candidate-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandidateElementComponent = (function () {
    function CandidateElementComponent(apicall) {
        this.apicall = apicall;
        //this.initmap();
    }
    CandidateElementComponent.prototype.ngOnInit = function () {
    };
    CandidateElementComponent.prototype.ngOnChanges = function (changes) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "globalopenflag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CandidateElementComponent.prototype, "candElement", void 0);
    CandidateElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-candidate-element',
            template: __webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/candidate-element/candidate-element.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object])
    ], CandidateElementComponent);
    return CandidateElementComponent;
    var _a;
}());

//# sourceMappingURL=candidate-element.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".click-progress {\r\n    cursor: pointer;\r\n}\r\n.atol_tab{\r\n    width: 20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"IsadminLogin;else candidate\">\r\n    <div class=\"main-content gadgeon-content\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-9\">\r\n                <h5>Candidate List</h5>\r\n            </div>\r\n        </div>\r\n        <div class=\"section table-section\">\r\n            <div class=\"row\">\r\n                <div id=\"searchprod\" class=\"collapse searchbar2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"search\" id=\"prodtoolId\">\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"search\" id=\"prodpartnumber\">\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"search\" id=\"prodnodeId\">\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"search\" id=\"prodStatus\">\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"search\" id=\"prodvendorName\">\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <input class=\"col-xs-12\" type=\"date\" id=\"prodDate\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row atollsearchrow\">\r\n                <button type=\"button\" class=\"btn btn-sm atollbutton\" data-toggle=\"collapse\" data-target=\"#searchprod\">Search</button>\r\n            </div>\r\n            <div class=\"container\">\r\n                <app-candidate-element *ngFor=\"let item of candidateList\" [candElement]=\"item\">\r\n                </app-candidate-element>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #candidate>content here...</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableListComponent = (function () {
    function TableListComponent(renderer, apicall, router, global) {
        this.renderer = renderer;
        this.apicall = apicall;
        this.router = router;
        this.global = global;
        this.candidateList = [1, 2, 3];
        this.IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true : false;
        if (localStorage.getItem('userLogin') == 'true') {
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    TableListComponent.prototype.ngOnInit = function () {
        this.initdata();
    };
    TableListComponent.prototype.ngOnChanges = function () {
        this.initdata();
    };
    TableListComponent.prototype.initdata = function () {
        console.log(localStorage.getItem("adminLoginGad"));
        if (localStorage.getItem("adminLoginGad") == "true") {
            this.IsadminLogin = true;
        }
        else {
            this.IsadminLogin = false;
        }
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* GlobalService */]) === "function" && _d || Object])
    ], TableListComponent);
    return TableListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\" style=\"color:white\">Register Candidate</h4>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"container\">\r\n                            <div class=\"section\">\r\n                                <form *ngIf=\"!isRegSuccess\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"email\">Email address:</label>\r\n                                                <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"model.email\"\r\n                                                    name=\"email1\" [ngModelOptions]=\"{standalone: true}\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"pwd\">Password:</label>\r\n                                                <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"model.password\"\r\n                                                    name=\"password\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the Candidate:</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\"\r\n                                                    name=\"name\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-5\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Name of the College</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"college\" [(ngModel)]=\"model.college\"\r\n                                                    name=\"college\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Year of Passing</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"yop\" [(ngModel)]=\"model.yop\"\r\n                                                    name=\"yop\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">B-Tech Marks (%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"degreePercentage\"\r\n                                                    [(ngModel)]=\"model.degreePercentage\" name=\"degreePercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Plus Two Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"plusTwoPercentage\"\r\n                                                    [(ngModel)]=\"model.plusTwoPercentage\" name=\"plusTwoPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-2\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">SSLC Marks(%)</label>\r\n                                                <input type=\"text\" class=\"form-control\" id=\"sslcPercentage\" [(ngModel)]=\"model.sslcPercentage\"\r\n                                                    name=\"sslcPercentage\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"name\">Mobile Number</label>\r\n                                                <input type=\"tel\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"model.mobile\"\r\n                                                    name=\"mobile\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-2\">\r\n                                            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Register()\">Register</button>\r\n                                            <div class=\"clearfix\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                                <div class=\"row\">\r\n                                    <label style=\"color: green;font-weight: 500\">{{message}}</label>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Login()\" *ngIf=\"isRegSuccess\">Register</button>\r\n                                    <div class=\"clearfix\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_services__ = __webpack_require__("../../../../../src/app/services/api.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(apicall, router) {
        this.apicall = apicall;
        this.router = router;
        this.model = {};
        this.isRegSuccess = false;
        this.message = "";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        console.log(this.model);
    };
    UserProfileComponent.prototype.Register = function () {
        var _this = this;
        this.apicall.submitCandidateRecord(this.model).subscribe(function (resp) {
            _this.isRegSuccess = resp["body"]["succuss"];
            _this.message = resp["body"]["msg"];
            _this.isRegSuccess = true;
            console.log(_this.isRegSuccess, _this.message);
        }, function (err) {
            var errorMessage = _this.getErrorMessage(JSON.parse(err["error"])["errorCode"]);
            _this.message = errorMessage;
            console.log(JSON.parse(err["error"])["errorCode"]);
            //this.message = this.message = err["error"]["errorCode"];
            console.log("Server Error");
        });
    };
    UserProfileComponent.prototype.getErrorMessage = function (errorCode) {
        this.Login();
        var msg = "Invalid Operation";
        switch (errorCode) {
            case "ER001":
                msg = "Server Error...Please contact admin";
                break;
            case "ER002":
                msg = "Server Error...Please contact admin";
                break;
            case "ER003":
                msg = "Candidate already exist..!!";
                break;
        }
        return msg;
    };
    UserProfileComponent.prototype.Login = function () {
        localStorage.setItem('userLogin', "false");
        location.reload();
        this.router.navigateByUrl('/login');
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_services__["a" /* ApiServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _b || Object])
    ], UserProfileComponent);
    return UserProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map