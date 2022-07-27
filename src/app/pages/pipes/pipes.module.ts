import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesRoutingModule} from './pipes-routing.module';
import {PipesComponent} from './pipes.component';
import {UsdInrPipe} from "../../pipes/usd-inr.pipe";


@NgModule({
  declarations: [
    PipesComponent,
    UsdInrPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
  ]
})
export class PipesModule {
}
