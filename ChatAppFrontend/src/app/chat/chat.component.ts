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

  constructor(public signalRService: SignalRService) { }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.signalRService.getMessages(); // Load messages on init
  }

  sendMessage() {
    const connection = this.signalRService.hubConnection;
    if (connection) {
      connection.invoke('SendMessage', this.user, this.message)
        .catch(err => console.error(err));
      this.message = ''; // Clear the input field after sending
    }
  }

  sendMessageToBot() {
    this.signalRService.sendMessageToBot(this.message);
    this.message = ''; // Clear the input field after sending
  }
}
