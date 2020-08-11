import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { biksenRoutingModule } from './biksen-routing.module';
import { biksenComponent } from './page/biksen.component';


@NgModule({
  declarations: [biksenComponent],
  imports: [
    CommonModule,
    biksenRoutingModule
  ]
})
export class biksenModule { }
