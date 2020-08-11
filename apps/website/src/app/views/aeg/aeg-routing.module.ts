import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AegComponent } from './page/aeg.component';

const routes: Routes = [{ path: '', component: AegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AegRoutingModule { }
