import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { BookDetailsClickedEvent } from './book-collection/book-card/book-card.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {}
