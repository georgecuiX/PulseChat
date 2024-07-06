import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private _hubConnection: signalR.HubConnection | undefined;

  public startConnection = () => {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chathub')
      .build();

    this._hubConnection.start().catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChartDataListener = () => {
    if (this._hubConnection) {
      this._hubConnection.on('ReceiveMessage', (user, message) => {
        console.log(`${user}: ${message}`);
      });
    }
  }

  public get hubConnection(): signalR.HubConnection | undefined {
    return this._hubConnection;
  }
}
