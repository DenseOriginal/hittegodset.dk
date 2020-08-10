import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoedRoutingModule } from './koed-routing.module';
import { KoedComponent } from './page/koed.component';


@NgModule({
  declarations: [KoedComponent],
  imports: [
    CommonModule,
    KoedRoutingModule
  ]
})
export class KoedModule { }
