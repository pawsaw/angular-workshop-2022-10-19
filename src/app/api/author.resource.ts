import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthorResponse } from './author.response';

@Injectable({
  providedIn: 'root',
})
export class AuthorResource {
  constructor() {}

  all(): Observable<AuthorResponse[]> {
    return of([]);
  }
}
