import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService, FacebookLoginProvider } from "angularx-social-login";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appAuth, route, auth) {
        this.appAuth = appAuth;
        this.route = route;
        this.auth = auth;
        this.data = { username: '', password: '' };
        this.returnUrl = '/home';
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
        this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AppAuthService,
            ActivatedRoute,
            AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map