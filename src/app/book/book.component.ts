import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { BookDetailsClickedEvent } from './book-card/book-card.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  bookTitleSearchTerm = '';

  books$: Observable<Book[] | null> = of(null);

  constructor(
    public readonly _books: BookApiService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.books$ = this._books.all();
  }

  ngOnDestroy(): void {}

  showDetailsView(event: BookDetailsClickedEvent): void {
    this._router.navigate(['books', event.book.isbn]);
  }

  filter(event: Event): void {
    this.bookTitleSearchTerm = (event.target as HTMLInputElement).value;
  }
}
