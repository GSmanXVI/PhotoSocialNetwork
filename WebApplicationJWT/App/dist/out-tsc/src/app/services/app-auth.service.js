import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
var AppAuthService = /** @class */ (function () {
    function AppAuthService(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.url = '/api';
    }
    AppAuthService.prototype.logout = function (redirectTo) {
        if (redirectTo === void 0) { redirectTo = '/home'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body, type, error_1;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var profile, result, error_3;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_4;
            return tslib_1.__generator(this, function (_a) {
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
    AppAuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            Router,
            AuthService])
    ], AppAuthService);
    return AppAuthService;
}());
export { AppAuthService };
//# sourceMappingURL=app-auth.service.js.map