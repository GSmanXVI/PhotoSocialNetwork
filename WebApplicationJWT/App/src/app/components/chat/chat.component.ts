import { Component, OnInit } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { AppAuthService } from 'src/app/services/app-auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  private _hubConnection: signalR.HubConnection;
  messages: Array<string> = [];

  constructor(
    private appAuth: AppAuthService
  ) { }

  ngOnInit(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('/chathub')
    .build();  

    console.log(this._hubConnection);

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection'));

    this._hubConnection.on('Send', (user, msg) => {
      this.messages.push(`[${new Date().toLocaleTimeString()}] ${user}: ${msg}`);
    });
  }

  sendMessage() {
    this._hubConnection.invoke('SendMessage', this.message, this.appAuth.getUsername());
    this.message = '';
  }
}
