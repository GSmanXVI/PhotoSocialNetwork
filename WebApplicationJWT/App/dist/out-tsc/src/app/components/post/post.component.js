import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';
var PostComponent = /** @class */ (function () {
    function PostComponent(route, postService, location) {
        this.route = route;
        this.postService = postService;
        this.location = location;
    }
    PostComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = +this.route.snapshot.paramMap.get('id');
                        _a = this;
                        return [4 /*yield*/, this.postService.getPost(id).toPromise()];
                    case 1:
                        _a.post = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostComponent.prototype.onBack = function () {
        this.location.back();
    };
    PostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PostService,
            Location])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map