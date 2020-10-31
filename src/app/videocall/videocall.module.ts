import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideocallRoutingModule } from './videocall-routing.module';
import { VideocallComponent } from './videocall.component';


@NgModule({
  declarations: [VideocallComponent],
  imports: [
    CommonModule,
    VideocallRoutingModule
  ]
})
export class VideocallModule { }
