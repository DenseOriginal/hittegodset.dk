import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayout } from "./layout/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
      { path: 'biksen', loadChildren: () => import('./views/biksen/biksen.module').then(m => m.biksenModule) },
      { path: 'kød', loadChildren: () => import('./views/koed/koed.module').then(m => m.KoedModule) },
      { path: 'køkkenhaver', loadChildren: () => import('./views/koekkenhaver/koekkenhaver.module').then(m => m.KoekkenhaverModule) },
      { path: 'kontakt', loadChildren: () => import('./views/kontakt/kontakt.module').then(m => m.KontaktModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }