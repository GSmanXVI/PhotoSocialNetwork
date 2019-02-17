import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Array<Post> = new Array<Post>();
  page: number = 1;

  constructor(
    private postService: PostService
  ) { }

  async ngOnInit() {
    await this.addPosts(this.page);
  }

  onView(id: number) {

  }

  async onNextPage() {
    this.page++;
    await this.addPosts(this.page);
  }

  async addPosts(page: number) {
    let newPosts = await this.postService.getPosts(page).toPromise();
    newPosts.forEach(element => {
      this.posts.push(element); 
    });
  }
}
