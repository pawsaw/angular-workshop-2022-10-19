import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { books } from './data/books';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor() {}

  all(): Observable<Book[]> {
    return of(books);
  }
}
