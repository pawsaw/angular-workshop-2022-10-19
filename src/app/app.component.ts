import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageType, MesssageColor } from './message/message.component';
import { NavigationTarget } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  messageType: MessageType = 'info';

  constructor(private readonly _router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.messageType = new Date().getTime() % 2 ? 'error' : 'warning';
    }, 1000);
  }

  navigate(target: NavigationTarget): void {
    this._router.navigate([target]);
  }

  title = 'Workshop';
}
