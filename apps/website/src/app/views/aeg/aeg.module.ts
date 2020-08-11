import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AegRoutingModule } from './aeg-routing.module';
import { AegComponent } from './page/aeg.component';


@NgModule({
  declarations: [AegComponent],
  imports: [
    CommonModule,
    AegRoutingModule
  ]
})
export class AegModule { }
