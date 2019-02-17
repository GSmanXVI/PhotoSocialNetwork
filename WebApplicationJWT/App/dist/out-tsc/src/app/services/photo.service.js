import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppAuthService } from './app-auth.service';
var PhotoService = /** @class */ (function () {
    function PhotoService(http, appAuth) {
        this.http = http;
        this.appAuth = appAuth;
        this.url = '/api';
    }
    PhotoService.prototype.getImages = function () {
        return this.http.get(this.url + "/posts/user/" + this.appAuth.getUsername());
    };
    PhotoService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/posts/" + id);
    };
    PhotoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AppAuthService])
    ], PhotoService);
    return PhotoService;
}());
export { PhotoService };
//# sourceMappingURL=photo.service.js.map