import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { PostService } from 'src/app/services/post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';
import { AppAuthService } from 'src/app/services/app-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: Profile;
  selectedFile: any;
  photos: Array<Post>;
  progress: number = 0;
  processing = false;
  username: string;


  constructor(
    private http: HttpClient,
    private profile: ProfileService,
    public photo: PostService,
    private route: ActivatedRoute,
    public appAuth: AppAuthService
  ) { }

  async ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    try {
      this.profileData = await this.profile.getProfile(this.username);    
      this.photos = await this.photo.getUserPosts(this.username).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

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

  onUpload() {
    let self = this;
    this.processing = false;
    this.progress = 0;
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile);
    this.http.post<any>('api/posts/upload', uploadData, { reportProgress: true, observe: 'events' }).subscribe(event => {
      console.log(event); 
      let loaded = (<any>event).loaded;
      let total = (<any>event).total;
      console.log("Loaded:" + loaded);
      console.log("Total:" + total);

      if (loaded == total && event.type == 1 && loaded != undefined && total != undefined) {
        this.progress = 0;
        this.processing = true;
      }

      if (event.type == 1 && loaded != total && loaded != undefined && total != undefined ) {
        this.progress = loaded / (total / 100);
      } else if (event.type == 0) {
        this.selectedFile = null; 
      } else if (event.type == 3) {
        this.photo.getCurrentUserPosts().subscribe(result => {
          self.photos = result;
          self.processing = false;
          console.log("DONE");  
        });
      } 
    });
  }

  async onDelete(id: number) {
    try {
      await this.photo.delete(id).toPromise(); 
      this.photos = await this.photo.getCurrentUserPosts().toPromise();
    } catch (error) {
      console.log(error); 
    }
  }

  onCancel() {
    this.selectedFile = null;
  }

  onView(id: number) {
    console.log(id); 
  }
}
