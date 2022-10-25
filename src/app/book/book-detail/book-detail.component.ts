import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

export interface BookDetailComponentParams extends Params {
  isbn: string;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(
    private _route: ActivatedRoute,
    private _bookApi: BookApiService
  ) {}

  ngOnInit(): void {
    // this._route.params.subscribe((params: Params) => {
    //   const { isbn } = params as BookDetailComponentParams;
    //   this._bookApi.one(isbn).subscribe((book) => {
    //     this.book = book;
    //   });
    // });

    this.book$ = this._route.params.pipe(
      map((params) => (params as BookDetailComponentParams).isbn),
      switchMap((isbn) => this._bookApi.one(isbn))
    );
  }
}
