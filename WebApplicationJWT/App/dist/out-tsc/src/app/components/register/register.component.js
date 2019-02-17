import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppAuthService } from 'src/app/services/app-auth.service';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
        this.data = { username: '', password: '', password2: '' };
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.auth.register(this.data);
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AppAuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map