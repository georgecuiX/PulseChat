import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignalRService } from '../services/signalr.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: string = '';
  message: string = '';
  messages: string[] = [];

  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
  }

  sendMessage() {
    const connection = this.signalRService.hubConnection;
    if (connection) {
      connection.invoke('SendMessage', this.user, this.message)
        .catch(err => console.error(err));
    }
  }
}
