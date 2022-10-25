import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private readonly RESOURCE = 'books';

  constructor(private readonly _http: HttpClient) {}

  all(): Observable<Book[]> {
    return this._http.get<Book[]>(`${environment.baseUrl}/${this.RESOURCE}`);
  }

  one(isbn: string): Observable<Book> {
    return this._http.get<Book>(
      `${environment.baseUrl}/${this.RESOURCE}/${isbn}`
    );
  }
}
