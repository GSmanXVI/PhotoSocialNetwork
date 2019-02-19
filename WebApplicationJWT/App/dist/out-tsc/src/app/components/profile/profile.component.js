import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppAuthService } from 'src/app/services/app-auth.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, profile, postService, route, appAuth) {
        this.http = http;
        this.profile = profile;
        this.postService = postService;
        this.route = route;
        this.appAuth = appAuth;
        this.progress = 0;
        this.processing = false;
        this.page = 1;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.username = this.route.snapshot.paramMap.get('username');
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.profile.getProfile(this.username)];
                    case 2:
                        _a.profileData = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.postService.getUserPosts(this.username).toPromise()];
                    case 3:
                        _b.posts = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
        // console.log(this.selectedFile);
    };
    ProfileComponent.prototype.onUpload = function () {
        var _this = this;
        this.page = 1;
        var self = this;
        this.processing = false;
        this.progress = 0;
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile);
        this.http.post('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            // console.log(event); 
            var loaded = event.loaded;
            var total = event.total;
            // console.log("Loaded:" + loaded);
            // console.log("Total:" + total);
            if (loaded == total && event.type == 1 && loaded != undefined && total != undefined) {
                _this.progress = 0;
                _this.processing = true;
            }
            if (event.type == 1 && loaded != total && loaded != undefined && total != undefined) {
                _this.progress = loaded / (total / 100);
            }
            else if (event.type == 0) {
                _this.selectedFile = null;
            }
            else if (event.type == 3) {
                _this.postService.getCurrentUserPosts().subscribe(function (result) {
                    self.posts = result;
                    self.processing = false;
                    // console.log("DONE");  
                });
            }
        });
    };
    ProfileComponent.prototype.onDelete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.postService.delete(id).toPromise()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.postService.getCurrentUserPosts().toPromise()];
                    case 2:
                        _a.posts = _b.sent();
                        this.page = 1;
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onCancel = function () {
        this.selectedFile = null;
    };
    ProfileComponent.prototype.onImgError = function (img, imgPath) {
        img.src = './assets/images/preloader.svg';
        setTimeout(function () {
            img.src = imgPath;
        }, 5000);
    };
    ProfileComponent.prototype.onScroll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.page++;
                        // console.log(this.page); 
                        return [4 /*yield*/, this.addPosts(this.page)];
                    case 1:
                        // console.log(this.page); 
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.addPosts = function (page) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newPosts;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postService.getCurrentUserPosts(page).toPromise()];
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
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            ProfileService,
            PostService,
            ActivatedRoute,
            AppAuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map