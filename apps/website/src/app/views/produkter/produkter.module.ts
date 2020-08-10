import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdukterRoutingModule } from './produkter-routing.module';
import { ProdukterComponent } from './page/produkter.component';


@NgModule({
  declarations: [ProdukterComponent],
  imports: [
    CommonModule,
    ProdukterRoutingModule
  ]
})
export class ProdukterModule { }
