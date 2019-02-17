import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginData } from '../models/login-data';
import { RegisterData } from '../models/register-data';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Profile } from 'selenium-webdriver/firefox';
import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {
  url: string = '/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  async logout(redirectTo: string = '/home') {    
    let body = {
      username: localStorage.getItem('username'),
      refreshToken: localStorage.getItem('refresh_token')
    };

    let type = localStorage.getItem('type');
    if (type == 'app') {
      try {
        await this.http.post<any>(`${this.url}/auth/logout`, body).toPromise();
        console.log("Logout"); 
      } catch (error) {
        console.log("Error"); 
      } 
    } else if (type == 'facebook') {
      await this.auth.signOut();
    }

    localStorage.removeItem('type');
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    this.router.navigate([redirectTo]);
  }

  async login(data: LoginData, redirectTo: string = '/home') {
    try {
      let result = await this.http.post<any>(`${this.url}/auth/login`, data).toPromise();    
      console.log(result);
      this.setTokens(result);
      localStorage.setItem('type', 'app');
      this.router.navigate([redirectTo]);
    } catch (error) {
      console.log(error); 
    }
  }

  async loginFacebook(data, redirectTo: string = '/home') {
    if (data) {
      let profile: RegisterData = {
        username: data.email,
        name: data.firstName,
        surname: data.lastName,
        facebookId: data.id,
        facebookAuthToken: data.authToken
      }
      try {
        let result = await this.http.post<any>(`${this.url}/accounts/facebook`, profile).toPromise();
        console.log(result);
        this.setTokens(result);
        localStorage.setItem('type', 'facebook');
        this.router.navigate([redirectTo]);
      } catch (error) {
        console.log(error); 
      } 
    }
  }

  async register(data: RegisterData, redirectTo: string = '/home') {
    try {
      let result = await this.http.post<any>(`${this.url}/accounts`, data).toPromise();
    } catch (error) {
      console.log(error); 
    }
  }

  refresh() {
    let body = {
      refreshToken: localStorage.getItem('refresh_token'),
      username: localStorage.getItem('username')
    };

    return this.http.post<any>(`${this.url}/auth/refresh`, body);
  }

  setTokens(result) {
    localStorage.setItem('username', result.username);
    localStorage.setItem('access_token', result.accessToken);
    localStorage.setItem('refresh_token', result.refreshToken);
  }

  checkAuth(): boolean {
    return localStorage.getItem('access_token') != null;
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  isAdmin() {
    let token = localStorage.getItem('access_token');
    let data = token.split('.')[1];
    let json = atob(data);
    let object = JSON.parse(json);
    return object.rol == "Admin";
  }
}
