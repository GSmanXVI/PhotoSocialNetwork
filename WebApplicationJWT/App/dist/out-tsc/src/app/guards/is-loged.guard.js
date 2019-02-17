import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../services/app-auth.service';
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
    IsLogedGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AppAuthService,
            Router])
    ], IsLogedGuard);
    return IsLogedGuard;
}());
export { IsLogedGuard };
//# sourceMappingURL=is-loged.guard.js.map