import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
