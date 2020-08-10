import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KoekkenhaverComponent } from './page/koekkenhaver.component';

const routes: Routes = [{ path: '', component: KoekkenhaverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KoekkenhaverRoutingModule { }
