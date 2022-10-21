import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

export type BorderColor = 'red' | 'blue';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input()
  book: Book | null = null;

  // 1. readonly
  // 2. depending on the value of _mouseIn
  get color(): BorderColor {
    return this._mouseIn ? 'red' : 'blue'; // very important: lightweight O(1)
  }

  _mouseIn = false;

  constructor() {}

  ngOnInit(): void {}

  mouseIn(): void {
    this._mouseIn = true;
  }

  mouseOut(): void {
    this._mouseIn = false;
  }

  detailsClicked(event: MouseEvent): void {
    event.preventDefault();
    console.log('Details clicked', event);
  }
}
