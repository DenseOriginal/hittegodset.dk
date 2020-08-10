import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukterComponent } from './page/produkter.component';

const routes: Routes = [{ path: '', component: ProdukterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukterRoutingModule { }
