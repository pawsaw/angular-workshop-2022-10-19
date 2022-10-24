import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazineComponent } from './magazine.component';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [MagazineComponent],
  imports: [CommonModule, ApiModule],
  exports: [MagazineComponent],
})
export class MagazineModule {}
