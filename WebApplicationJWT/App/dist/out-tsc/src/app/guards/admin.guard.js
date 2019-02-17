import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '../services/app-auth.service';
var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this.auth.checkAuth() && this.auth.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['/error']);
            return false;
        }
    };
    AdminGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AppAuthService,
            Router])
    ], AdminGuard);
    return AdminGuard;
}());
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map