import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayout } from './main/main.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainLayout],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [MainLayout]
})
export class LayoutModule { }
