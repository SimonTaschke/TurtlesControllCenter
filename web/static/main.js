(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webcam/webcam.component */ "./src/app/webcam/webcam.component.ts");
/* harmony import */ var _device_statistics_device_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-statistics/device-statistics.component */ "./src/app/device-statistics/device-statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"] },
    { path: 'deviceStatistics', component: _device_statistics_device_statistics_component__WEBPACK_IMPORTED_MODULE_5__["DeviceStatisticsComponent"] },
    { path: 'webcam', component: _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_4__["WebcamComponent"] },
    { path: '', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    background-color: white;\r\n    float: left;\r\n    width: 70%;\r\n    top: 350px;\r\n    left: 360px;\r\n    position: absolute;\r\n}\r\n\r\n.side {\r\n    background-color: #f1f1f1;\r\n    float: left;\r\n    width: 350px;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 360;\r\n    left: 10;\r\n}\r\n\r\n.settingNav {\r\n    float: left;\r\n    position: absolute;\r\n    padding-left: 350px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 900px) {\r\n    .row {\r\n        flex-direction: column;\r\n    }\r\n    .side {\r\n        width: 100%;\r\n        position: relative;\r\n    }\r\n    .main {\r\n        position: relative;\r\n        width: 100%;\r\n        left: 10px;\r\n        top: 10px;\r\n    }\r\n    .settingNav {\r\n        padding-left: 1px;\r\n        position: relative;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\r\n\r\n/* @media screen and (max-width: 400px) {\r\n    .navbar a {\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFNBQVM7Q0FDWjs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixZQUFZO0NBQ2Y7O0FBR0QsZ0pBQWdKOztBQUVoSjtJQUNJO1FBQ0ksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0tBQ3RCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO0tBQ2I7SUFDRDtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtLQUNmO0NBQ0o7O0FBR0QscUpBQXFKOztBQUdySjs7Ozs7SUFLSSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG4gICAgbGVmdDogMzYwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzYwO1xyXG4gICAgbGVmdDogMTA7XHJcbn1cclxuXHJcbi5zZXR0aW5nTmF2IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA3MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1haW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5zZXR0aW5nTmF2IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNDAwcHggd2lkZSwgbWFrZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAubmF2YmFyIGEge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=settingNav>\r\n    <app-navigation></app-navigation>\r\n</div>\r\n\r\n<div class=\"side\">\r\n    <app-status></app-status>\r\n</div>\r\n\r\n<div class=\"main\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(websocket) {
        this.websocket = websocket;
        this.title = 'turtle-app';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.websocket.connect();
    };
    ;
    AppComponent.prototype.ngOnDestroy = function () {
        this.websocket.disconnect();
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _device_statistics_device_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-statistics/device-statistics.component */ "./src/app/device-statistics/device-statistics.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webcam/webcam.component */ "./src/app/webcam/webcam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_4__["StatusComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"],
                _device_statistics_device_statistics_component__WEBPACK_IMPORTED_MODULE_9__["DeviceStatisticsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _webcam_webcam_component__WEBPACK_IMPORTED_MODULE_11__["WebcamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [
                _websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/device-statistics/device-statistics.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/device-statistics/device-statistics.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group .button {\n    background-color: #73AD21;\n    border: none;\n    color: white;\n    width: 150px;\n    height: 75px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n    float: left;\n    margin-top: 30px;\n    margin-left: 10px;\n}\n\n.btn-group .button:hover {\n    background-color: red;\n}\n\n.btn-group .active {\n    background-color: blue;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor: pointer;\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLXN0YXRpc3RpY3MvZGV2aWNlLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1zdGF0aXN0aWNzL2RldmljZS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWdyb3VwIC5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3M0FEMjE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJ0bi1ncm91cCAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5idG4tZ3JvdXAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/device-statistics/device-statistics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/device-statistics/device-statistics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"table\"></div>"

/***/ }),

/***/ "./src/app/device-statistics/device-statistics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/device-statistics/device-statistics.component.ts ***!
  \******************************************************************/
/*! exports provided: DeviceStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceStatisticsComponent", function() { return DeviceStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _statisticsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statisticsData */ "./src/app/statisticsData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceStatisticsComponent = /** @class */ (function () {
    function DeviceStatisticsComponent(websocketService) {
        this.websocketService = websocketService;
    }
    DeviceStatisticsComponent.prototype.ngOnInit = function () {
        this.websocketService.subscribeStatitics();
        this.websocketService.deviceStatistics.subscribe(function (statistics) {
            showStatistics(statistics);
        });
    };
    ;
    DeviceStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-statistics',
            template: __webpack_require__(/*! ./device-statistics.component.html */ "./src/app/device-statistics/device-statistics.component.html"),
            styles: [__webpack_require__(/*! ./device-statistics.component.css */ "./src/app/device-statistics/device-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], DeviceStatisticsComponent);
    return DeviceStatisticsComponent;
}());

function showStatistics(staticsData) {
    var returnValue = Object(_statisticsData__WEBPACK_IMPORTED_MODULE_2__["convertData2GoogleData"])(staticsData);
    var dataColumns = returnValue.chartsData;
    var legendNames = returnValue.legendName;
    google.charts.load('current', {
        'packages': ['bar', 'corechart'],
        'language': 'de'
    });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        for (var i = 0; i < legendNames.length; i++) {
            data.addColumn('number', legendNames[i]);
        }
        data.addRows(dataColumns);
        var options = {
            width: '100%',
            height: '400',
            theme: 'material',
            legend: {
                position: 'bottom',
                textStyle: {
                    fontSize: 11
                }
            },
            title: 'Betriebsdauer',
            axes: {
                x: {
                    0: { side: 'bottom', label: 'Heizungsdauer' }
                }
            },
            bar: { groupWidth: "90%" }
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('table'));
        chart.draw(data, options);
    }
    ;
}
;


/***/ }),

/***/ "./src/app/dummy-deviceSettings.ts":
/*!*****************************************!*\
  !*** ./src/app/dummy-deviceSettings.ts ***!
  \*****************************************/
/*! exports provided: DEVICESETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICESETTINGS", function() { return DEVICESETTINGS; });
var DEVICESETTINGS = [
    {
        name: 'Winterschlaf Januar bis März',
        lightSettings: {
            hourOn: NaN,
            hourOff: NaN
        },
        heatingSettings: {
            temperatureDay: NaN,
            temperatureNight: 6,
            hourDayOn: NaN,
            hourDayOff: NaN
        }
    },
    {
        name: 'April',
        lightSettings: {
            hourOn: 11,
            hourOff: 15
        },
        heatingSettings: {
            temperatureDay: 15,
            temperatureNight: 10,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Mai',
        lightSettings: {
            hourOn: 10,
            hourOff: 16
        },
        heatingSettings: {
            temperatureDay: 20,
            temperatureNight: 12,
            hourDayOn: 9,
            hourDayOff: 17
        }
    },
    {
        name: 'Juni',
        lightSettings: {
            hourOn: 9,
            hourOff: 17
        },
        heatingSettings: {
            temperatureDay: 25,
            temperatureNight: 15,
            hourDayOn: 8,
            hourDayOff: 18
        }
    },
    {
        name: 'Juli',
        lightSettings: {
            hourOn: 8,
            hourOff: 18
        },
        heatingSettings: {
            temperatureDay: 30,
            temperatureNight: 18,
            hourDayOn: 7,
            hourDayOff: 19
        }
    },
    {
        name: 'August',
        lightSettings: {
            hourOn: 9,
            hourOff: 17
        },
        heatingSettings: {
            temperatureDay: 25,
            temperatureNight: 16,
            hourDayOn: 8,
            hourDayOff: 18
        }
    },
    {
        name: 'September',
        lightSettings: {
            hourOn: 10,
            hourOff: 16
        },
        heatingSettings: {
            temperatureDay: 23,
            temperatureNight: 15,
            hourDayOn: 9,
            hourDayOff: 17
        }
    },
    {
        name: 'Oktober',
        lightSettings: {
            hourOn: 10,
            hourOff: 16
        },
        heatingSettings: {
            temperatureDay: 21,
            temperatureNight: 13,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Going to Sleepmode (1)',
        lightSettings: {
            hourOn: 11,
            hourOff: 15
        },
        heatingSettings: {
            temperatureDay: 20,
            temperatureNight: 12,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Going to Sleepmode (2)',
        lightSettings: {
            hourOn: 12,
            hourOff: 15
        },
        heatingSettings: {
            temperatureDay: 17,
            temperatureNight: 10,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Going to Sleepmode (3)',
        lightSettings: {
            hourOn: 12,
            hourOff: 14
        },
        heatingSettings: {
            temperatureDay: 15,
            temperatureNight: 8,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Going to Sleepmode (4)',
        lightSettings: {
            hourOn: 13,
            hourOff: 14
        },
        heatingSettings: {
            temperatureDay: 10,
            temperatureNight: 6,
            hourDayOn: 10,
            hourDayOff: 16
        }
    },
    {
        name: 'Winterschlaf Dezember',
        lightSettings: {
            hourOn: NaN,
            hourOff: NaN
        },
        heatingSettings: {
            temperatureDay: NaN,
            temperatureNight: 6,
            hourDayOn: NaN,
            hourDayOff: NaN
        }
    },
];


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Content, padding, border and margin are all included in the total size */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Style of the body */\r\n\r\nbody {\r\n    font-family: Arial;\r\n    margin: 0;\r\n}\r\n\r\n/* Header */\r\n\r\n.header {\r\n    padding: 80px;\r\n    text-align: center;\r\n    background: url('/static/img/turtleHeader.jpg') no-repeat center;\r\n    background-color: #73AD21;\r\n    color: white;\r\n}\r\n\r\n.header h1 {\r\n    font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBR0QsdUJBQXVCOztBQUV2QjtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0NBQ2I7O0FBR0QsWUFBWTs7QUFFWjtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGVudCwgcGFkZGluZywgYm9yZGVyIGFuZCBtYXJnaW4gYXJlIGFsbCBpbmNsdWRlZCBpbiB0aGUgdG90YWwgc2l6ZSAqL1xyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgb2YgdGhlIGJvZHkgKi9cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyogSGVhZGVyICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9zdGF0aWMvaW1nL3R1cnRsZUhlYWRlci5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczQUQyMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h1>Schildkrötenkontrollzentrum</h1>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\n.dropbtn {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n    background-color: #f9f9f9;\r\n    color: black;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n.dropdown {\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown .active{\r\n    background-color: #cccccc;\r\n    color: black;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #cccccc;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.time {\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGdEQUFnRDtJQUNoRCxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRyb3BidG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li class=\"dropdown\">\n        <!-- <a href=\"javascript:void(0)\" class=\"dropbtn\">Messwerte</a> -->\n        <a class=\"dropbtn\" [routerLink]=\"['/statistics']\" [routerLinkActive]=\"['active']\">\n            Messwerte\n        </a>\n        <div class=\"dropdown-content\">\n            <a (click)=\"subscribeStatistics('15min')\" [routerLink]=\"['/statistics']\">15 Min</a>\n            <a (click)=\"subscribeStatistics('hour')\" [routerLink]=\"['/statistics']\">Stunde</a>\n            <a (click)=\"subscribeStatistics('day')\" [routerLink]=\"['/statistics']\">Tag</a>\n            <a (click)=\"subscribeStatistics('week')\" [routerLink]=\"['/statistics']\">Woche</a>\n            <a (click)=\"subscribeStatistics('month')\" [routerLink]=\"['/statistics']\">Monat</a>\n            <a (click)=\"subscribeStatistics('year')\" [routerLink]=\"['/statistics']\">Jahr</a>\n        </div>\n    </li>\n    <li class=\"dropdown\">\n        <a class=\"dropbtn\" [routerLink]=\"['/deviceStatistics']\" [routerLinkActive]=\"['active']\">\n            Geräte\n        </a>\n        <div class=\"dropdown-content\">\n            <a (click)=\"subscribeStatistics('15min')\" [routerLink]=\"['/deviceStatistics']\">15 Min</a>\n            <a (click)=\"subscribeStatistics('hour')\" [routerLink]=\"['/deviceStatistics']\">Stunde</a>\n            <a (click)=\"subscribeStatistics('day')\" [routerLink]=\"['/deviceStatistics']\">Tag</a>\n            <a (click)=\"subscribeStatistics('week')\" [routerLink]=\"['/deviceStatistics']\">Woche</a>\n            <a (click)=\"subscribeStatistics('month')\" [routerLink]=\"['/deviceStatistics']\">Monat</a>\n            <a (click)=\"subscribeStatistics('year')\" [routerLink]=\"['/deviceStatistics']\">Jahr</a>\n        </div>\n    </li>\n    <li class=\"dropdown\">\n        <a class=\"dropbtn\" [routerLink]=\"['/settings']\" [routerLinkActive]=\"['active']\">\n            Einstellungen\n        </a>\n    </li>\n    <li class=\"dropdown\">\n            <a class=\"dropbtn\" [routerLink]=\"['/webcam']\" [routerLinkActive]=\"['active']\">\n                Webcam\n            </a>\n        </li>\n    <div class=\"time\">\n        {{time}} - {{date}}\n    </div>\n</ul>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(websocketService) {
        this.websocketService = websocketService;
    }
    NavigationComponent.prototype.subscribeStatistics = function (staticsListener) {
        this.websocketService.subscribeStatistics(staticsListener);
    };
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.timeNow.subscribe(function (timeNow) { _this.time = timeNow; });
        this.websocketService.dateNow.subscribe(function (dateNow) { _this.date = dateNow; });
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border: 0px solid rgb(214, 214, 214);\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    border-radius: 15px;\r\n    border-spacing: 0px;\r\n    font-size: 80%;\r\n    margin-right: 30px;\r\n}\r\n\r\ntd {\r\n    width: 3.7%;\r\n}\r\n\r\n.th1 {\r\n    border-left: 0px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-top: 0px solid rgb(214, 214, 214);\r\n    height: 25px;\r\n}\r\n\r\n.th2 {\r\n    border-left: 1px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-top: 0px solid rgb(214, 214, 214);\r\n}\r\n\r\n.th3 {\r\n    border-left: 0px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-top: 1px solid rgb(214, 214, 214);\r\n}\r\n\r\n.tdGreen {\r\n    border: 1px solid rgb(214, 214, 214);\r\n    border-radius: 15px;\r\n    background-color: #73AD21;\r\n    padding: 2px;\r\n    font-size: 80%;\r\n    color: white;\r\n}\r\n\r\n.tdRed {\r\n    border: 1px solid rgb(214, 214, 214);\r\n    border-radius: 15px;\r\n    background-color: rgb(202, 198, 198);\r\n    padding: 2px;\r\n    font-size: 80%;\r\n}\r\n\r\n.tdYellowGreen {\r\n    border: 1px solid rgb(214, 214, 214);\r\n    border-radius: 15px;\r\n    background-color: red;\r\n    padding: 2px;\r\n    font-size: 80%;\r\n    color: white;\r\n}\r\n\r\n.tdGreenBlue {\r\n    border: 1px solid rgb(214, 214, 214);\r\n    border-radius: 15px;\r\n    background-color: darkgray;\r\n    padding: 2px;\r\n    font-size: 80%;\r\n}\r\n\r\n.tdDashed1 {\r\n    border-top: 1px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-left: 1px solid rgb(214, 214, 214);\r\n}\r\n\r\n.tdDashed2 {\r\n    border-top: 0px solid gre;\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-left: 1px solid rgb(214, 214, 214);\r\n}\r\n\r\n.tdDashed3 {\r\n    border-top: 1px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-left: 1px solid rgb(214, 214, 214);\r\n}\r\n\r\n.tdDashed4 {\r\n    border-top: 0px solid rgb(214, 214, 214);\r\n    border-bottom: 0px solid rgb(214, 214, 214);\r\n    border-right: 0px solid rgb(214, 214, 214);\r\n    border-left: 1px solid rgb(214, 214, 214);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSwwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBQzNDLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLDBDQUEwQztJQUMxQyw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBQzNDLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLHFDQUFxQztJQUNyQyxvQkFBb0I7SUFDcEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztBQUVEO0lBQ0kscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0NBQ2hCOztBQUVEO0lBQ0kscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQywwQ0FBMEM7Q0FDN0M7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQywwQ0FBMEM7Q0FDN0M7O0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQywwQ0FBMEM7Q0FDN0M7O0FBRUQ7SUFDSSx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQywwQ0FBMEM7Q0FDN0MiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgd2lkdGg6IDMuNyU7XHJcbn1cclxuXHJcbi50aDEge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnRoMiB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG59XHJcblxyXG4udGgzIHtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbn1cclxuXHJcbi50ZEdyZWVuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNBRDIxO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50ZFJlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTk4LCAxOTgpO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi50ZFllbGxvd0dyZWVuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRkR3JlZW5CbHVlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4udGREYXNoZWQxIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbn1cclxuXHJcbi50ZERhc2hlZDIge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGdyZTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxufVxyXG5cclxuLnRkRGFzaGVkMyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG59XHJcblxyXG4udGREYXNoZWQ0IHtcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tabelle</h1>\r\n<table>\r\n    <!-- write Header of table -->\r\n    <tr>\r\n        <th class=\"th1\" rowspan=\"1\"></th>\r\n\r\n        <th class=\"th2\" *ngFor=\"let hour of createHours(24)\">{{hour}}\r\n        </th>\r\n    </tr>\r\n\r\n    <!-- write data of each month -->\r\n    <ng-container *ngFor=\"let setting of deviceSettings\">\r\n        <tr height=\"7px\">\r\n            <!-- write month name -->\r\n            <th class=\"th3\" rowspan=\"6\">{{setting.name}}</th>\r\n            <ng-container *ngFor=\"let hour of createHours(24)\">\r\n                <td class=\"tdDashed1\"></td>\r\n            </ng-container>\r\n        </tr>\r\n\r\n        <tr>\r\n            <!-- write light status -->\r\n            <ng-container *ngFor=\"let lightStyle of getLightStyle(setting.lightSettings.hourOn, setting.lightSettings.hourOff)\">\r\n                <td [attr.colspan]=\"lightStyle.colspan\" class={{lightStyle.style}}>\r\n                    {{lightStyle.string}}\r\n                </td>\r\n            </ng-container>\r\n        </tr>\r\n        <tr height=\"1px\">\r\n            <ng-container *ngFor=\"let hour of createHours(24)\">\r\n                <td class=\"tdDashed2\"></td>\r\n            </ng-container>\r\n        </tr>\r\n        <tr height=\"1px \">\r\n            <ng-container *ngFor=\"let hour of createHours(24) \">\r\n                <td class=\"tdDashed3\"></td>\r\n            </ng-container>\r\n        </tr>\r\n\r\n        <!-- write temperature Status  -->\r\n        <tr>\r\n            <ng-container *ngFor=\"let temperatureStyle of getTemperatureStyle(setting.heatingSettings.hourDayOn, setting.heatingSettings.hourDayOff, setting.heatingSettings.temperatureDay, setting.heatingSettings.temperatureNight) \">\r\n                <td [attr.colspan]=\"temperatureStyle.colspan \" class={{temperatureStyle.style}}>\r\n                    {{temperatureStyle.string}}\r\n                </td>\r\n            </ng-container>\r\n        </tr>\r\n\r\n        <tr height=\"5px\">\r\n            <ng-container *ngFor=\"let hour of createHours(24)\">\r\n                <td class=\"tdDashed4\"></td>\r\n            </ng-container>\r\n        </tr>\r\n    </ng-container>\r\n</table>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dummy_deviceSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dummy-deviceSettings */ "./src/app/dummy-deviceSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.deviceSettings = _dummy_deviceSettings__WEBPACK_IMPORTED_MODULE_1__["DEVICESETTINGS"];
    }
    SettingsComponent.prototype.getLightStyle = function (lightOn, lightOff) {
        var lightStyle = [];
        var length;
        if (isNaN(lightOn)) {
            length = 24;
            lightStyle.push(new tableStyle("off", "tdGreenBlue", length));
        }
        else {
            length = lightOn - 1;
            lightStyle.push(new tableStyle("off", "tdGreenBlue", length));
            length = lightOff - lightOn;
            lightStyle.push(new tableStyle("on", "tdYellowGreen", length));
            length = 24 - lightOff + 1;
            lightStyle.push(new tableStyle("off", "tdGreenBlue", length));
        }
        console.log(lightStyle);
        return lightStyle;
    };
    SettingsComponent.prototype.getTemperatureStyle = function (hourDayOn, hourDayOff, tempDay, tempNight) {
        var temperatureStyle = [];
        var lenght;
        if (isNaN(hourDayOn)) { // Es gibt keinen Tag
            lenght = 24;
            temperatureStyle.push(new tableStyle(tempNight.toString(), "tdRed", lenght));
        }
        else {
            lenght = hourDayOn - 1;
            temperatureStyle.push(new tableStyle(tempNight.toString(), "tdRed", lenght));
            lenght = hourDayOff - hourDayOn;
            temperatureStyle.push(new tableStyle(tempDay.toString(), "tdGreen", lenght));
            lenght = 24 - hourDayOff + 1;
            temperatureStyle.push(new tableStyle(tempNight.toString(), "tdRed", lenght));
        }
        return temperatureStyle;
    };
    SettingsComponent.prototype.createHours = function (maxHour) {
        var hours = [];
        for (var i = 1; i <= maxHour; i++) {
            hours.push(i);
        }
        return hours;
    };
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());

var tableStyle = /** @class */ (function () {
    function tableStyle(myString, myStyle, myColspan) {
        this.string = myString;
        this.style = myStyle;
        this.colspan = myColspan;
    }
    return tableStyle;
}());


/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* Button Status\r\n    \r\n    .btn-group .button {\r\n        background-color: #73AD21;\r\n        border: none;\r\n        color: white;\r\n        width: 150px;\r\n        height: 75px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n        float: left;\r\n        margin-top: 30px;\r\n        margin-left: 10px;\r\n    }\r\n    \r\n    .btn-group .button:hover {\r\n        background-color: red;\r\n    }\r\n    \r\n    .btn-group .active {\r\n        background-color: blue;\r\n        border: none;\r\n        color: white;\r\n        padding: 15px 32px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n        float: left;\r\n    } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWlDSSIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC8qIEJ1dHRvbiBTdGF0dXNcclxuICAgIFxyXG4gICAgLmJ0bi1ncm91cCAuYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNBRDIxO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tZ3JvdXAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWdyb3VwIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"linechart_material\"></div>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var _statisticsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statisticsData */ "./src/app/statisticsData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(websocketService) {
        this.websocketService = websocketService;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.websocketService.subscribeStatitics();
        this.websocketService.temperaturStatistics.subscribe(function (statistics) {
            console.log(statistics);
            showStatistics(statistics);
        });
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());

function showStatistics(staticsData) {
    var returnValue = Object(_statisticsData__WEBPACK_IMPORTED_MODULE_2__["convertData2GoogleData"])(staticsData);
    var dataColumns = returnValue.chartsData;
    var legendNames = returnValue.legendName;
    // Loading Visualization Bibliothek
    google.charts.load('current', {
        'packages': ['corechart'],
        'language': 'de'
    });
    // Seting callback to run when the Google Visualization is loaded
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        for (var i = 0; i < legendNames.length; i++) {
            data.addColumn('number', legendNames[i]);
        }
        data.addRows(dataColumns);
        var options = {
            title: 'Temperaturverlauf [°C]',
            titleTextStyle: {
                color: 'black',
                fontSize: 30,
            },
            width: '100%',
            height: '400',
            legend: {
                position: 'bottom',
                textStyle: {
                    fontSize: 11
                }
            },
            curveType: 'function',
            vAxes: {
                0: {
                    title: 'Temperatur [C°]'
                }
            },
            hAxis: {
                viewWindow: {
                    min: dataColumns[0][0],
                    max: dataColumns[dataColumns.length - 1][0]
                }
            }
        };
        var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));
        chart.draw(data, options);
    }
    ;
}
;


/***/ }),

/***/ "./src/app/statisticsData.ts":
/*!***********************************!*\
  !*** ./src/app/statisticsData.ts ***!
  \***********************************/
/*! exports provided: StatisticsData, convertData2GoogleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsData", function() { return StatisticsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertData2GoogleData", function() { return convertData2GoogleData; });
var StatisticsData = /** @class */ (function () {
    function StatisticsData() {
    }
    return StatisticsData;
}());

var DataClass = /** @class */ (function () {
    function DataClass() {
    }
    return DataClass;
}());
var date = /** @class */ (function () {
    function date() {
    }
    return date;
}());
function convertData2GoogleData(inputData) {
    var chartsData = [];
    var legendName = [];
    var iTime;
    var iData;
    for (iTime = 0; iTime < inputData.time.length; iTime++) {
        var timeStamp = [];
        var time = inputData.time[iTime];
        timeStamp.push(new Date(time.year, time.month - 1, time.day, time.hour, time.min, time.sec)); // month: [0, 11]
        for (iData = 0; iData < inputData.data.length; iData++) {
            timeStamp.push(inputData.data[iData].data[iTime]);
        }
        chartsData.push(timeStamp);
    }
    for (iData = 0; iData < inputData.data.length; iData++) {
        legendName.push(inputData.data[iData].legendName);
    }
    return { legendName: legendName, chartsData: chartsData };
}


/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding-top: 0px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.time_data {\r\n    font-size: 20px;\r\n    margin-left: 20px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.status_farbe_green {\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 25px;\r\n    background-color: #73AD21;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    width: 80px;\r\n}\r\n\r\n.status_farbe_red {\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: white;\r\n    border-radius: 25px;\r\n    background-color: red;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    width: 80px;\r\n}\r\n\r\n.status_text {\r\n    display: inline-block;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n    padding-top: 15px;\r\n    width: 80px;\r\n    padding-bottom: 15px;\r\n    margin-left: 20px;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .column {\r\n        float: left;\r\n        width: 25%;\r\n        padding-top: 0px;\r\n        padding-bottom: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDs7QUFFdEQ7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixxQkFBcUI7S0FDeEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50aW1lX2RhdGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXNfZmFyYmVfZ3JlZW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3M0FEMjE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXNfZmFyYmVfcmVkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXNfdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Letztes Update</h3>\n\n\n<div class=\"column\">\n    <div class=\"status_text\">Zeit</div>\n</div>\n<div class=\"column\">\n    <div class=\"status_farbe_green\">{{time}}</div>\n</div>\n\n<div class=\"column\">\n    <div class=\"status_text\">Datum</div>\n</div>\n<div class=\"column\">\n    <div class=\"status_farbe_green\">{{date}}</div>\n</div>\n\n<div *ngFor=\"let device of devices\">\n    <div class=\"column\">\n        <div class=\"status_text\">{{device.name}}</div>\n    </div>\n    <div class=\"column\">\n        <div class={{getDeviceStyle(device.state)}}>{{device.state}}</div>\n    </div>\n</div>\n\n<div *ngFor=\"let sensor of temperatureSensors\">\n    <div class=\"column\">\n        <div class=\"status_text\">{{sensor.name}}</div>\n    </div>\n    <div class=\"column\">\n        <div class={{getTemperatureStyle(sensor.temperature)}}>{{sensor.temperature}}</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../websocket.service */ "./src/app/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = /** @class */ (function () {
    function StatusComponent(websocketService) {
        this.websocketService = websocketService;
    }
    StatusComponent.prototype.getDeviceStyle = function (state) {
        if (state == "off") {
            return 'status_farbe_red';
        }
        else {
            return 'status_farbe_green';
        }
        ;
    };
    StatusComponent.prototype.getTemperatureStyle = function (temperature) {
        if (temperature < 15) {
            return 'status_farbe_red';
        }
        else {
            return 'status_farbe_green';
        }
        ;
    };
    //constructor(private statusService: StatusService) { }
    // getTemperature(): void {
    //   this.statusService.getTemperature()
    //   .subscribe(temperatureSensors => this.temperatureSensors = temperatureSensors);
    // }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.temperatureSensors.subscribe(function (temperatureSensors) { _this.temperatureSensors = temperatureSensors; });
        this.websocketService.devices.subscribe(function (devices) { _this.devices = devices; });
        this.websocketService.dateOfMeasurements.subscribe(function (dateOfMeasurements) { _this.date = dateOfMeasurements; });
        this.websocketService.timeOfMeasurements.subscribe(function (timeOfMeasurements) { _this.time = timeOfMeasurements; });
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/webcam/webcam.component.css":
/*!*********************************************!*\
  !*** ./src/app/webcam/webcam.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmNhbS93ZWJjYW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/webcam/webcam.component.html":
/*!**********************************************!*\
  !*** ./src/app/webcam/webcam.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  webcam works!\n  <img src=\"/static/img/webcam.jpg\">  \n</p>\n"

/***/ }),

/***/ "./src/app/webcam/webcam.component.ts":
/*!********************************************!*\
  !*** ./src/app/webcam/webcam.component.ts ***!
  \********************************************/
/*! exports provided: WebcamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
    }
    WebcamComponent.prototype.ngOnInit = function () {
    };
    WebcamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webcam',
            template: __webpack_require__(/*! ./webcam.component.html */ "./src/app/webcam/webcam.component.html"),
            styles: [__webpack_require__(/*! ./webcam.component.css */ "./src/app/webcam/webcam.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebcamComponent);
    return WebcamComponent;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.temperatureSensors = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.devices = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.timeNow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dateNow = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.timeOfMeasurements = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dateOfMeasurements = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.temperaturStatistics = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.deviceStatistics = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.statisticsListener = "15min";
        this.test = 1;
    }
    WebsocketService.prototype.connect = function () {
        var self = this; // ToDo: Optimize
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(location.protocol + '//' + document.domain + ':' + location.port);
        this.socket.on('sendStatusUpdate', function (message) {
            var data = JSON.parse(message);
            self.temperatureSensors.next(data.temperatureSensors);
            self.devices.next(data.devices);
            self.timeOfMeasurements.next(data.timeOfMeasurements);
            self.dateOfMeasurements.next(data.dateOfMeasurements);
            self.timeNow.next(data.time);
            self.dateNow.next(data.date);
        });
        this.socket.on('sendSettings', function (message) {
            console.log("ToDo");
            // ToDo
        });
        this.socket.on('sendStatistics', function (temperaturDataMsg, deviceDataMsg) {
            var temperaturData = JSON.parse(temperaturDataMsg);
            var deviceData = JSON.parse(deviceDataMsg);
            self.temperaturStatistics.next(temperaturData);
            self.deviceStatistics.next(deviceData);
        });
    };
    ;
    WebsocketService.prototype.subscribeStatitics = function () {
        this.socket.emit('subscribeStatistics', { room: this.statisticsListener });
    };
    WebsocketService.prototype.subscribeStatistics = function (newStaticsListener) {
        this.statisticsListener = newStaticsListener;
        this.subscribeStatitics();
    };
    ;
    WebsocketService.prototype.disconnect = function () {
        this.socket.disconnect();
        console.log('Disonnected');
    };
    ;
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ws_url: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/simon/turtles/turtle-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map