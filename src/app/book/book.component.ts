import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  books: Book[] | null = null;
  private _sub = new Subscription();

  constructor(public readonly _books: BookApiService) {}

  ngOnInit(): void {
    const sub = this._books.all().subscribe({
      next: (books) => {
        this.books = books;
      },
    });

    this._sub.add(sub);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  showDetailsView(event: BookDetailsClickedEvent): void {
    console.log('show details view for: ', event.book);
  }

  filter(event: Event): void {
    this.bookTitleSearchTerm = (event.target as HTMLInputElement).value;
  }
}
