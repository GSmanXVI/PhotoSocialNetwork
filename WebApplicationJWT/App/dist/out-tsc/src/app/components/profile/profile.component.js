import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppAuthService } from 'src/app/services/app-auth.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, profile, photo, route, appAuth) {
        this.http = http;
        this.profile = profile;
        this.photo = photo;
        this.route = route;
        this.appAuth = appAuth;
        this.progress = 0;
        this.processing = false;
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
                        return [4 /*yield*/, this.photo.getUserPosts(this.username).toPromise()];
                    case 3:
                        _b.photos = _c.sent();
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
        console.log(this.selectedFile);
    };
    // async onUpload() {
    //   const uploadData = new FormData();
    //   uploadData.append('file', this.selectedFile);
    //   try {
    //     await this.http.post('api/posts/upload', uploadData).toPromise();
    //     this.photos = await this.photo.getImages();
    //     this.selectedFile = null;
    //   } catch (error) {
    //     console.log(error); 
    //   }
    // }
    // onUpload() {
    //   let self = this;
    //   this.processing = false;
    //   this.progress = 0;
    //   const uploadData = new FormData();
    //   uploadData.append('file', this.selectedFile);
    //   this.http.post<any>('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(async event => {
    //     console.log(event); 
    //     let loaded = (<any>event).loaded;
    //     let total = (<any>event).total;
    //     if (loaded == total) {
    //       this.selectedFile = null;
    //       this.processing = true;
    //       this.photo.getCurrentUserPosts().subscribe(result => {
    //         self.progress = 0;
    //         self.photos = result;
    //         console.log("DONE"); 
    //         self.processing = false;
    //       });
    //       // try {
    //       //   this.photos = await this.photo.getCurrentUserPosts().toPromise();   
    //       //   this.progress = 0;
    //       //   this.processing = false;           
    //       // } catch (error) {
    //       //   console.log(error);         
    //       // }
    //     }
    //     else if (event.type == 1) {
    //       this.progress = loaded / (total / 100);
    //     } else if (event.type == 0) {
    //       this.selectedFile = null; 
    //     } 
    //     console.log(this.processing); 
    //   });
    // }
    ProfileComponent.prototype.onUpload = function () {
        var _this = this;
        var self = this;
        this.processing = false;
        this.progress = 0;
        var uploadData = new FormData();
        uploadData.append('file', this.selectedFile);
        this.http.post('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
            console.log(event);
            var loaded = event.loaded;
            var total = event.total;
            console.log("Loaded:" + loaded);
            console.log("Total:" + total);
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
                _this.photo.getCurrentUserPosts().subscribe(function (result) {
                    self.photos = result;
                    self.processing = false;
                    console.log("DONE");
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
                        return [4 /*yield*/, this.photo.delete(id).toPromise()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.photo.getCurrentUserPosts().toPromise()];
                    case 2:
                        _a.photos = _b.sent();
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
    ProfileComponent.prototype.onView = function (id) {
        console.log(id);
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