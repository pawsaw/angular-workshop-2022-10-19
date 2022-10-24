import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { BookDetailsClickedEvent } from './book-card/book-card.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookTitleSearchTerm = '';

  books: Book[] | null = null;

  constructor(public readonly _books: BookApiService) {}

  ngOnInit(): void {
    this.books = this._books.books();
  }

  showDetailsView(event: BookDetailsClickedEvent): void {
    console.log('show details view for: ', event.book);
  }

  filter(event: Event): void {
    this.bookTitleSearchTerm = (event.target as HTMLInputElement).value;
  }
}
