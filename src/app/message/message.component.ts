import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export type MessageType = 'error' | 'info' | 'warning';
export type MesssageColor = 'red' | 'blue' | 'yellow';

const typeColorMap: Record<MessageType, MesssageColor> = {
  error: 'red',
  info: 'blue',
  warning: 'yellow',
};

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnChanges {
  @Input() type: MessageType = 'info';

  color: MesssageColor = typeColorMap[this.type];

  constructor() {}

  ngOnInit(): void {
    // this.color = typeColorMap[this.type];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      const typeChange = changes['type'];
      this.color = typeColorMap[typeChange.currentValue as MessageType];
    }
  }

  // get color(): MesssageColor {
  //   return typeColorMap[this.type];
  // }
}
