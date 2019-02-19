import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = '/api';

  constructor(
    private http: HttpClient,
    private appAuth: AppAuthService
  ) { }

  getCurrentUserPosts(page: number = 1) {
    return this.http.get<Array<Post>>(`${this.url}/posts/user/${this.appAuth.getUsername()}?page=${page}`);
  }

  getUserPosts(username: string, page: number = 1) {
    return this.http.get<Array<Post>>(`${this.url}/posts/user/${username}?page=${page}`);
  }

  getPosts(page: number = 1) {
    return this.http.get<Array<Post>>(`${this.url}/posts?page=${page}`);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.url}/posts/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/posts/${id}`);
  }
}
