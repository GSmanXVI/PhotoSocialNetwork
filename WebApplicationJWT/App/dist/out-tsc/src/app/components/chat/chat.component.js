import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { AppAuthService } from 'src/app/services/app-auth.service';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(appAuth) {
        this.appAuth = appAuth;
        this.message = '';
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('/chathub')
            .build();
        console.log(this._hubConnection);
        this._hubConnection
            .start()
            .then(function () { return console.log('Connection started!'); })
            .catch(function (err) { return console.log('Error while establishing connection'); });
        this._hubConnection.on('Send', function (user, msg) {
            _this.messages.push("[" + new Date().toLocaleTimeString() + "] " + user + ": " + msg);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this._hubConnection.invoke('SendMessage', this.message, this.appAuth.getUsername());
        this.message = '';
    };
    ChatComponent = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AppAuthService])
    ], ChatComponent);
    return ChatComponent;
}());
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map