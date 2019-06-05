import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgImageComponent } from './bg-image/bg-image.component';

@NgModule({
  declarations: [BgImageComponent],
  imports: [
    CommonModule,
  ],
  exports: [BgImageComponent]
})
export class BgImageModule {
}
