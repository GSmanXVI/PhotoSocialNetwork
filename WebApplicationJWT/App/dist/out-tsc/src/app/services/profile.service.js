import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map