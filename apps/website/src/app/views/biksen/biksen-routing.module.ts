import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { biksenComponent } from './page/biksen.component';

const routes: Routes = [{ path: '', component: biksenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class biksenRoutingModule { }
