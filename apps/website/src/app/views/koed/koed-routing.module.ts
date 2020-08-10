import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoedComponent } from './page/koed.component';

const routes: Routes = [{ path: '', component: KoedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KoedRoutingModule { }
