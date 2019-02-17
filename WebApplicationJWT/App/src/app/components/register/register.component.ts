import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { RegisterData } from 'src/app/models/register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data: RegisterData = { username: '', password: '', password2: '' }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private auth: AppAuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.data);
  }
}
