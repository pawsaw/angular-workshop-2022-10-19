import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { CanLeaveGuard } from './can-leave.guard';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: ':isbn',
        component: BookDetailComponent,
        canDeactivate: [CanLeaveGuard],
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
