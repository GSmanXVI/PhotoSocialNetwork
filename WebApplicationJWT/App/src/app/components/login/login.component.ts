import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { LoginData } from 'src/app/models/login-data';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { AuthService, FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: LoginData = { username: '', password: '' };
  returnUrl: string = '/home';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private appAuth: AppAuthService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
    console.log(this.returnUrl); 
    this.auth.authState.subscribe((data) => {
      console.log(data); 
      if (data != null) {
        this.appAuth.loginFacebook(data); 
      }
    });
  }

  onSubmit() {
    this.appAuth.login(this.data, this.returnUrl);
  }

  launchFbLogin() {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
