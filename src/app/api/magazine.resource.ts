import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MagazineResponse } from './magazine.response';

@Injectable({
  providedIn: 'root',
})
export class MagazineResource {
  constructor() {}

  all(): Observable<MagazineResponse[]> {
    return of([]);
  }
}
