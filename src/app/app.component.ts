import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Workshop';
  book: Book | null = null;

  private _timer: unknown;

  ngOnInit(): void {
    this._timer = setTimeout(() => {
      this.book = {
        title: 'My dummy book',
        abstract: 'Lorem ipsum',
        author: 'Max Mustermann',
      };
    }, 5000);
  }

  ngOnDestroy(): void {
    // @ts-ignore
    clearTimeout(this._timer);
  }
}
