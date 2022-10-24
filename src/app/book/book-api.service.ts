import { Injectable } from '@angular/core';
import { Book } from './book';
import { books } from './data/books';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor() {}

  books(): Book[] {
    return books;
  }
}
