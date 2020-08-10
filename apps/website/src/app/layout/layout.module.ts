import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayout } from './main/main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayout],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainLayout]
})
export class LayoutModule { }
