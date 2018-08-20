import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosService } from './model';
import { FrontComponent } from './front/front.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrontComponent],
  providers: [CandidatosService]
})
export class HomeModule { }
