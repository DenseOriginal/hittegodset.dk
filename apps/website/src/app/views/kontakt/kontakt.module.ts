import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './page/kontakt.component';
import { ComponentsModule } from "../../shared/components/components.module";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    ComponentsModule,
    MatButtonModule
  ]
})
export class KontaktModule { }
