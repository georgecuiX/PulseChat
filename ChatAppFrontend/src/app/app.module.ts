import { BrowserModule } from '@angular/platform-browser';
import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { SignalRService } from './services/signalr.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    SignalRService,
    provideRouter([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'chat-history', component: ChatHistoryComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
