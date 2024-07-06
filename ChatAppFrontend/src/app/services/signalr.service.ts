import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private _hubConnection: signalR.HubConnection | undefined;
  public messages: { user: string, message: string }[] = [];

  constructor(private http: HttpClient) {}

  public startConnection = () => {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chathub')
      .build();

    this._hubConnection.start().catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChartDataListener = () => {
    if (this._hubConnection) {
      this._hubConnection.on('ReceiveMessage', (user, message) => {
        this.messages.push({ user, message });
      });
    }
  }

  public getMessages() {
    this.http.get<{ user: string, message: string }[]>('https://localhost:5001/api/chat/messages')
      .subscribe(messages => this.messages.push(...messages));
  }

  public sendMessageToBot(message: string) {
    this._hubConnection?.invoke('SendMessageToBot', 'User', message)
      .catch(err => console.error(err));
  }

  public get hubConnection(): signalR.HubConnection | undefined {
    return this._hubConnection;
  }
}
