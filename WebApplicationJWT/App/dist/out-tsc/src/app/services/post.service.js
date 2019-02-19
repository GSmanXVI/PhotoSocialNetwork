import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppAuthService } from './app-auth.service';
var PostService = /** @class */ (function () {
    function PostService(http, appAuth) {
        this.http = http;
        this.appAuth = appAuth;
        this.url = '/api';
    }
    PostService.prototype.getCurrentUserPosts = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts/user/" + this.appAuth.getUsername() + "?page=" + page);
    };
    PostService.prototype.getUserPosts = function (username, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts/user/" + username + "?page=" + page);
    };
    PostService.prototype.getPosts = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get(this.url + "/posts?page=" + page);
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.url + "/posts/" + id);
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete(this.url + "/posts/" + id);
    };
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AppAuthService])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map