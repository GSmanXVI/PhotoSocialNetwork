import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(profile) {
        this.profile = profile;
    }
    UsersComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
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
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map