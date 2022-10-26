import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-collection/book-card/book-card.component';
import { BookFilterPipe } from './book-collection/book-filter/book-filter.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookDetailComponent,
    BookCollectionComponent,
  ],
  exports: [BookComponent],
  imports: [CommonModule, BookRoutingModule],
})
export class BookModule {}
