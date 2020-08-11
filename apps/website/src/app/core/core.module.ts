import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from "./services/loading.service";
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    LoadingService
  ]
})
export class CoreModule {
  constructor(private loadingService: LoadingService) { }
}
