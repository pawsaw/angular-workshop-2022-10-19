import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BookComponent, BookCardComponent, BookFilterPipe, BookDetailComponent],
  exports: [BookComponent],
  imports: [CommonModule, BookRoutingModule],
})
export class BookModule {}
