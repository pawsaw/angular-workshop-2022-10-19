import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type NavigationTarget = 'books' | 'about';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() navigationTriggered = new EventEmitter<NavigationTarget>();

  constructor() {}

  ngOnInit(): void {}

  triggerNavigation(event: MouseEvent, target: NavigationTarget): void {
    event.preventDefault();
    this.navigationTriggered.emit(target);
  }
}
