import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppAuthService } from './app-auth.service';
var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(auth) {
        this.auth = auth;
    }
    AuthInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        var token = this.auth.getAccessToken();
        return next.handle(this.addHeaders(request, token)).pipe(catchError(function (error) {
            if (error.status == 401) {
                return _this.handleError(request, next);
            }
            else {
                return throwError(error);
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
        return this.auth.refresh().pipe(switchMap(function (newTokens) {
            _this.auth.setTokens(newTokens);
            return next.handle(_this.addHeaders(request, newTokens.accessToken));
        }));
    };
    AuthInterceptorService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AppAuthService])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
export { AuthInterceptorService };
//# sourceMappingURL=auth-interceptor.service.js.map