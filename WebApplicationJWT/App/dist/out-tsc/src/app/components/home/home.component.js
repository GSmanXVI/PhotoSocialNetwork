import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
        this.posts = new Array();
        this.page = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addPosts(this.page)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.onView = function (id) {
    };
    HomeComponent.prototype.onNextPage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.page++;
                        return [4 /*yield*/, this.addPosts(this.page)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.addPosts = function (page) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newPosts;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getPosts(page).toPromise()];
                    case 1:
                        newPosts = _a.sent();
                        newPosts.forEach(function (element) {
                            _this.posts.push(element);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map