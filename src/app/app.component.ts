import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageType, MesssageColor } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  messageType: MessageType = 'info';

  ngOnInit(): void {
    setInterval(() => {
      this.messageType = new Date().getTime() % 2 ? 'error' : 'warning';
    }, 1000);
  }

  title = 'Workshop';
}
