import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoekkenhaverRoutingModule } from './koekkenhaver-routing.module';
import { KoekkenhaverComponent } from './page/koekkenhaver.component';


@NgModule({
  declarations: [KoekkenhaverComponent],
  imports: [
    CommonModule,
    KoekkenhaverRoutingModule
  ]
})
export class KoekkenhaverModule { }
