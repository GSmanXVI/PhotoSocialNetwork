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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _guards_is_loged_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/is-loged.guard */ "./src/app/guards/is-loged.guard.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");













var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_is_loged_guard__WEBPACK_IMPORTED_MODULE_10__["IsLogedGuard"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], canActivate: [_guards_is_loged_guard__WEBPACK_IMPORTED_MODULE_10__["IsLogedGuard"]] },
    { path: 'profile/:username', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'chat', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'post/:id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">AuthTest</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"home\">Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.checkAuth()\">\n        <a class=\"nav-link\" routerLink=\"users\">Users</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.checkAuth()\">\n        <a class=\"nav-link\" routerLink=\"chat\">Chat</a>\n      </li>\n    </ul>\n    <a *ngIf=\"auth.checkAuth()\" class=\"my-2 my-sm-0 mr-2 text-muted\" routerLink=\"profile/{{auth.getUsername()}}\">{{auth.getUsername()}}</a>\n    <a *ngIf=\"!auth.checkAuth()\" class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\" routerLink=\"register\">Register</a>\n    <a *ngIf=\"!auth.checkAuth()\" class=\"btn btn-outline-success my-2 my-sm-0 mr-2\" routerLink=\"login\">Login</a>\n    <button *ngIf=\"auth.checkAuth()\" class=\"btn btn-outline-danger my-2 my-sm-0\" type=\"button\" (click)=\"onLogout()\"><i class=\"fas fa-sign-out-alt\"></i></button>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/app-auth.service */ "./src/app/services/app-auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AppAuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_data_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/data/data.component */ "./src/app/components/data/data.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");








var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]("241649093381428")
    }
]);
function provideConfig() {
    return config;
}











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_data_data_component__WEBPACK_IMPORTED_MODULE_10__["DataComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptorService"], multi: true },
                { provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"], useFactory: provideConfig }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom: 90px\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" *ngFor=\"let item of messages\">{{item}}</li>\n  </ul>\n</div>\n<form class=\"input-group p-4 fixed-bottom\" style=\"background-color: #f8f9fa\" (submit)=\"sendMessage()\">\n  <input autocomplete=\"off\" type=\"text\" name=\"message\" [(ngModel)]=\"message\" class=\"form-control\" placeholder=\"Your message\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-primary\" id=\"button-addon2\">Send</button>\n  </div>\n</form>  "

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-auth.service */ "./src/app/services/app-auth.service.ts");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(appAuth) {
        this.appAuth = appAuth;
        this.message = '';
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl('/chathub')
            .build();
        console.log(this._hubConnection);
        this._hubConnection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection'); });
        this._hubConnection.on('Send', function (user, msg) {
            _this.messages.push("[" + new Date().toLocaleTimeString() + "] " + user + ": " + msg);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this._hubConnection.invoke('SendMessage', this.message, this.appAuth.getUsername());
        this.message = '';
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/data/data.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/data/data.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <h1>Data page!</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/data/data.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/data/data.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF0YS9kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/data/data.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/data/data.component.ts ***!
  \***************************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataComponent = /** @class */ (function () {
    function DataComponent() {
    }
    DataComponent.prototype.ngOnInit = function () {
    };
    DataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/components/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.scss */ "./src/app/components/data/data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  <h1>Ooops!</h1>\n  <h2>There is some problem here...</h2>\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" *ngIf=\"posts\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 my-3\" *ngFor=\"let item of posts\">\n      <div class=\"card\">\n        <img src=\"{{item.thumbnailPath}}\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body py-2\">\n            <a class=\"card-link\" routerLink=\"/post/{{item.id}}\">View</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-outline-primary\" (click)=\"onNextPage()\">Load more...</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
        this.posts = new Array();
        this.page = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addPosts(this.page)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.onView = function (id) {
    };
    HomeComponent.prototype.onNextPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.page++;
                        return [4 /*yield*/, this.addPosts(this.page)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.addPosts = function (page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newPosts;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getPosts(page).toPromise()];
                    case 1:
                        newPosts = _a.sent();
                        newPosts.forEach(function (element) {
                            _this.posts.push(element);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <h3 class=\"mb-0\">Login using:</h3>\n  <div class=\"row my-4 px-2\">\n    <div class=\"col-sm-4 p-2\">\n      <button \n        class=\"btn btn-primary w-100 text-left d-flex justify-content-between align-items-center\"\n        style=\"background-color: #3b5998; border: none\"\n        (click)=\"launchFbLogin()\">\n        <span>Facebook</span><i class=\"fab fa-facebook-f\"></i>\n      </button>\n    </div>\n    <div class=\"col-sm-4 p-2\">\n      <button \n        class=\"btn btn-primary w-100 text-left d-flex justify-content-between align-items-center\"\n        style=\"background-color: #ea4335; border: none\"\n        disabled=\"disabled\">\n        <span>Google</span><i class=\"fab fa-google\"></i>\n      </button>\n    </div>\n    <div class=\"col-sm-4 p-2\">\n      <button \n        class=\"btn btn-primary w-100 text-left d-flex justify-content-between align-items-center\"\n        style=\"background-color: #4875B4; border: none\"\n        disabled=\"disabled\">\n        <span>LinkedIn</span><i class=\"fab fa-linkedin-in\"></i>\n      </button>\n    </div>\n  </div>\n  <hr>\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" [(ngModel)]=\"data.username\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\n        placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n        placeholder=\"Password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n    <a routerLink=\"/register\" class=\"btn\">Register a new account</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-auth.service */ "./src/app/services/app-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(appAuth, route, auth) {
        this.appAuth = appAuth;
        this.route = route;
        this.auth = auth;
        this.data = { username: '', password: '' };
        this.returnUrl = '/home';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
        console.log(this.returnUrl);
        this.auth.authState.subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.appAuth.loginFacebook(data);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.appAuth.login(this.data, this.returnUrl);
    };
    LoginComponent.prototype.launchFbLogin = function () {
        this.auth.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  <button class=\"btn btn-outline-secondary\" (click)=\"onBack()\"><i class=\"fas fa-arrow-left\"></i> Back</button>\n  <div class=\"row my-4\">\n    <div class=\"col-sm-12\" *ngIf=\"post\">\n      <img src=\"{{post.imagePath}}\" class=\"img-fluid\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PostComponent = /** @class */ (function () {
    function PostComponent(route, postService, location) {
        this.route = route;
        this.postService = postService;
        this.location = location;
    }
    PostComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = +this.route.snapshot.paramMap.get('id');
                        _a = this;
                        return [4 /*yield*/, this.postService.getPost(id).toPromise()];
                    case 1:
                        _a.post = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostComponent.prototype.onBack = function () {
        this.location.back();
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/components/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" *ngIf=\"profileData\">\n  <h1 class=\"text-center display-4\">{{profileData.name}} {{profileData.surname}}</h1>\n  <div *ngIf=\"username == appAuth.getUsername()\">\n    <div class=\"py-4\">\n        <input style=\"display: none\" type=\"file\" (change)=\"onFileChanged($event)\" #fileInput>\n        <button class=\"btn btn-outline-primary mr-2\" (click)=\"fileInput.click()\">{{ selectedFile?.name || \"Select File\" }}</button>\n        <button *ngIf=\"selectedFile\" class=\"btn btn-outline-success mr-2\" (click)=\"onUpload()\">Upload</button>\n        <button *ngIf=\"selectedFile\" class=\"btn btn-outline-danger\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n      <div class=\"progress\" *ngIf=\"progress != 0\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': progress + '%'}\">{{progress.toFixed()}}%</div>\n      </div>\n      <div class=\"progress\" *ngIf=\"processing\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">Processing...</div>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 my-3\" *ngFor=\"let item of photos\">\n      <div class=\"card\">\n        <img src=\"{{item.thumbnailPath}}\" class=\"card-img-top\" alt=\"thumbnail\">\n        <div class=\"card-body py-2\">\n          <a class=\"card-link\" routerLink=\"/post/{{item.id}}\">View</a>\n          <a href=\"javascript:void(0);\" class=\"card-link text-danger\" (click)=\"onDelete(item.id)\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app-auth.service */ "./src/app/services/app-auth.service.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, profile, photo, route, appAuth) {
        this.http = http;
        this.profile = profile;
        this.photo = photo;
        this.route = route;
        this.appAuth = appAuth;
        this.progress = 0;
        this.processing = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.username = this.route.snapshot.paramMap.get('username');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.profile.getProfile(this.username)];
                    case 2:
                        _a.profileData = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.photo.getUserPosts(this.username).toPromise()];
                    case 3:
                        _b.photos = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    // async onUpload() {
    //   const uploadData = new FormData();
    //   uploadData.append('file', this.selectedFile);
    //   try {
    //     await this.http.post('api/posts/upload', uploadData).toPromise();
    //     this.photos = await this.photo.getImages();
    //     this.selectedFile = null;
    //   } catch (error) {
    //     console.log(error); 
    //   }
    // }
    // onUpload() {
    //   let self = this;
    //   this.processing = false;
    //   this.progress = 0;
    //   const uploadData = new FormData();
    //   uploadData.append('file', this.selectedFile);
    //   this.http.post<any>('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(async event => {
    //     console.log(event); 
    //     let loaded = (<any>event).loaded;
    //     let total = (<any>event).total;
    //     if (loaded == total) {
    //       this.selectedFile = null;
    //       this.processing = true;
    //       this.photo.getCurrentUserPosts().subscribe(result => {
    //         self.progress = 0;
    //         self.photos = result;
    //         console.log("DONE"); 
    //         self.processing = false;
    //       });
    //       // try {
    //       //   this.photos = await this.photo.getCurrentUserPosts().toPromise();   
    //       //   this.progress = 0;
    //       //   this.processing = false;           
    //       // } catch (error) {
    //       //   console.log(error);         
    //       // }
    //     }
    //     else if (event.type == 1) {
    //       this.progress = loaded / (total / 100);
    //     } else if (event.type == 0) {
    //       this.selectedFile = null; 
    //     } 
    //     console.log(this.processing); 
    //   });
    // }
    ProfileComponent.prototype.onUpload = function () {
        var _this = this;
        var self = this;
        this.processing = false;
        this.progress = 0;
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile);
        this.http.post('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            console.log(event);
            var loaded = event.loaded;
            var total = event.total;
            console.log("Loaded:" + loaded);
            console.log("Total:" + total);
            if (loaded == total && event.type == 1 && loaded != undefined && total != undefined) {
                _this.progress = 0;
                _this.processing = true;
            }
            if (event.type == 1 && loaded != total && loaded != undefined && total != undefined) {
                _this.progress = loaded / (total / 100);
            }
            else if (event.type == 0) {
                _this.selectedFile = null;
            }
            else if (event.type == 3) {
                _this.photo.getCurrentUserPosts().subscribe(function (result) {
                    self.photos = result;
                    self.processing = false;
                    console.log("DONE");
                });
            }
        });
    };
    ProfileComponent.prototype.onDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.photo.delete(id).toPromise()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.photo.getCurrentUserPosts().toPromise()];
                    case 2:
                        _a.photos = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onCancel = function () {
        this.selectedFile = null;
    };
    ProfileComponent.prototype.onView = function (id) {
        console.log(id);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AppAuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"emailId\">Email address</label>\n      <input type=\"email\" [(ngModel)]=\"data.username\" name=\"email\" class=\"form-control\" id=\"emailId\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"nameId\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"data.name\" name=\"name\" class=\"form-control\" id=\"nameId\" placeholder=\"Enter name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surnameId\">Surname</label>\n      <input type=\"text\" [(ngModel)]=\"data.surname\" name=\"surname\" class=\"form-control\" id=\"surnameId\" placeholder=\"Enter surname\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordId\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" class=\"form-control\" id=\"passwordId\" placeholder=\"Enter password\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordId2\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"data.password2\" name=\"password2\" class=\"form-control\" id=\"passwordId2\" placeholder=\"Repeat your password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n    <a routerLink=\"/login\" class=\"btn\">Login</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-auth.service */ "./src/app/services/app-auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
        this.data = { username: '', password: '', password2: '' };
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.auth.register(this.data);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Username</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Surname</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of profiles\">\n        <td><a routerLink=\"/profile/{{item.username}}\">{{item.username}}</a></td>\n        <td>{{item.name}}</td>\n        <td>{{item.surname}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(profile) {
        this.profile = profile;
    }
    UsersComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.profile.getProfiles()];
                    case 1:
                        _a.profiles = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-auth.service */ "./src/app/services/app-auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.checkAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-loged.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/is-loged.guard.ts ***!
  \******************************************/
/*! exports provided: IsLogedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLogedGuard", function() { return IsLogedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-auth.service */ "./src/app/services/app-auth.service.ts");




var IsLogedGuard = /** @class */ (function () {
    function IsLogedGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    IsLogedGuard.prototype.canActivate = function (next, state) {
        if (this.auth.checkAuth()) {
            this.router.navigate(['/profile']);
            return false;
        }
        else {
            return true;
        }
    };
    IsLogedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsLogedGuard);
    return IsLogedGuard;
}());



/***/ }),

/***/ "./src/app/services/app-auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/app-auth.service.ts ***!
  \**********************************************/
/*! exports provided: AppAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthService", function() { return AppAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");





var AppAuthService = /** @class */ (function () {
    function AppAuthService(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.url = '/api';
    }
    AppAuthService.prototype.logout = function (redirectTo) {
        if (redirectTo === void 0) { redirectTo = '/home'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, type, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            username: localStorage.getItem('username'),
                            refreshToken: localStorage.getItem('refresh_token')
                        };
                        type = localStorage.getItem('type');
                        if (!(type == 'app')) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(this.url + "/auth/logout", body).toPromise()];
                    case 2:
                        _a.sent();
                        console.log("Logout");
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error");
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!(type == 'facebook')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.auth.signOut()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        localStorage.removeItem('type');
                        localStorage.removeItem('username');
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        this.router.navigate([redirectTo]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppAuthService.prototype.login = function (data, redirectTo) {
        if (redirectTo === void 0) { redirectTo = '/home'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.url + "/auth/login", data).toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.setTokens(result);
                        localStorage.setItem('type', 'app');
                        this.router.navigate([redirectTo]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppAuthService.prototype.loginFacebook = function (data, redirectTo) {
        if (redirectTo === void 0) { redirectTo = '/home'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, result, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data) return [3 /*break*/, 4];
                        profile = {
                            username: data.email,
                            name: data.firstName,
                            surname: data.lastName,
                            facebookId: data.id,
                            facebookAuthToken: data.authToken
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(this.url + "/accounts/facebook", profile).toPromise()];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        this.setTokens(result);
                        localStorage.setItem('type', 'facebook');
                        this.router.navigate([redirectTo]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppAuthService.prototype.register = function (data, redirectTo) {
        if (redirectTo === void 0) { redirectTo = '/home'; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.url + "/accounts", data).toPromise()];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppAuthService.prototype.refresh = function () {
        var body = {
            refreshToken: localStorage.getItem('refresh_token'),
            username: localStorage.getItem('username')
        };
        return this.http.post(this.url + "/auth/refresh", body);
    };
    AppAuthService.prototype.setTokens = function (result) {
        localStorage.setItem('username', result.username);
        localStorage.setItem('access_token', result.accessToken);
        localStorage.setItem('refresh_token', result.refreshToken);
    };
    AppAuthService.prototype.checkAuth = function () {
        return localStorage.getItem('access_token') != null;
    };
    AppAuthService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AppAuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('access_token');
    };
    AppAuthService.prototype.isAdmin = function () {
        var token = localStorage.getItem('access_token');
        var data = token.split('.')[1];
        var json = atob(data);
        var object = JSON.parse(json);
        return object.rol == "Admin";
    };
    AppAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AppAuthService);
    return AppAuthService;
}());



/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-auth.service */ "./src/app/services/app-auth.service.ts");





var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(auth) {
        this.auth = auth;
    }
    AuthInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        var token = this.auth.getAccessToken();
        return next.handle(this.addHeaders(request, token)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.status == 401) {
                return _this.handleError(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    };
    AuthInterceptorService.prototype.addHeaders = function (request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
            }
        });
    };
    AuthInterceptorService.prototype.handleError = function (request, next) {
        var _this = this;
        console.log("401 ERROR!");
        return this.auth.refresh().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (newTokens) {
            _this.auth.setTokens(newTokens);
            return next.handle(_this.addHeaders(request, newTokens.accessToken));
        }));
    };
    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AppAuthService"]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-auth.service */ "./src/app/services/app-auth.service.ts");




var PostService = /** @class */ (function () {
    function PostService(http, appAuth) {
        this.http = http;
        this.appAuth = appAuth;
        this.url = '/api';
    }
    PostService.prototype.getCurrentUserPosts = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts/user/" + this.appAuth.getUsername());
    };
    PostService.prototype.getUserPosts = function (username, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts/user/" + username);
    };
    PostService.prototype.getPosts = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts?page=" + page);
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.url + "/posts/" + id);
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/posts/" + id);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AppAuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.url = '/api';
    }
    ProfileService.prototype.getCurrentProfile = function () {
        return this.http.get(this.url + "/accounts/current").toPromise();
    };
    ProfileService.prototype.getProfile = function (username) {
        return this.http.get(this.url + "/accounts/" + username).toPromise();
    };
    ProfileService.prototype.getProfiles = function () {
        return this.http.get(this.url + "/accounts").toPromise();
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\gspos\source\repos\WebApplicationJWT\WebApplicationJWT\App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map