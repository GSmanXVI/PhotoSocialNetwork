import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { AppAuthService } from './app-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string = '/api';

  constructor(
    private http: HttpClient
  ) {
  }

  getCurrentProfile() {
    return this.http.get<Profile>(`${this.url}/accounts/current`).toPromise();
  }

  getProfile(username: string) {
    return this.http.get<Profile>(`${this.url}/accounts/${username}`).toPromise();
  }

  getProfiles() {
    return this.http.get<Profile[]>(`${this.url}/accounts`).toPromise();
  }
}
