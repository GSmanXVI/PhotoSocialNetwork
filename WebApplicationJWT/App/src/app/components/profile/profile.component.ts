import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { PostService } from 'src/app/services/post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { retryWhen } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: Profile;
  username: string;
  posts: Array<Post>;  
  selectedFile: any;
  progress: number = 0;
  processing = false;
  page: number = 1;

  constructor(
    private http: HttpClient,
    private profile: ProfileService,
    private postService: PostService,
    private route: ActivatedRoute,
    public appAuth: AppAuthService
  ) { }

  async ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    try {
      this.profileData = await this.profile.getProfile(this.username);    
      this.posts = await this.postService.getUserPosts(this.username).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
  }

  onUpload() {
    this.page = 1;
    let self = this;
    this.processing = false;
    this.progress = 0;
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    this.http.post<any>('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      // console.log(event); 
      let loaded = (<any>event).loaded;
      let total = (<any>event).total;
      // console.log("Loaded:" + loaded);
      // console.log("Total:" + total);

      if (loaded == total && event.type == 1 && loaded != undefined && total != undefined) {
        this.progress = 0;
        this.processing = true;
      }

      if (event.type == 1 && loaded != total && loaded != undefined && total != undefined ) {
        this.progress = loaded / (total / 100);
      } else if (event.type == 0) {
        this.selectedFile = null; 
      } else if (event.type == 3) {
        this.postService.getCurrentUserPosts().subscribe(result => {
          self.posts = result;
          self.processing = false;
          // console.log("DONE");  
        });
      } 
    });
  }

  async onDelete(id: number) {
    try {
      await this.postService.delete(id).toPromise(); 
      this.posts = await this.postService.getCurrentUserPosts().toPromise();
      this.page = 1;
    } catch (error) {
      console.log(error); 
    }
  }

  onCancel() {
    this.selectedFile = null;
  }

  onImgError(img, imgPath) {
    img.src = './assets/images/preloader.svg';

    setTimeout(() => 
    {
      img.src = imgPath;
    }, 5000);
  }

  async onScroll() {
    this.page++;
    // console.log(this.page); 
    await this.addPosts(this.page);
  }

  async addPosts(page: number) {
    let newPosts = await this.postService.getCurrentUserPosts(page).toPromise();
    newPosts.forEach(element => {
      this.posts.push(element); 
    });
  }
}
