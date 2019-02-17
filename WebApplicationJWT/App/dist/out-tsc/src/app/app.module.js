import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
var config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("241649093381428")
    }
]);
export function provideConfig() {
    return config;
}
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ChatComponent } from './components/chat/chat.component';
import { PostComponent } from './components/post/post.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                RegisterComponent,
                DataComponent,
                HomeComponent,
                ProfileComponent,
                UsersComponent,
                ErrorComponent,
                ChatComponent,
                PostComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                AppRoutingModule,
                SocialLoginModule
            ],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
                { provide: AuthServiceConfig, useFactory: provideConfig }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map