import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: ':isbn',
        component: BookDetailComponent,
      },
      {
        path: '',
        component: BookCollectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
