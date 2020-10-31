import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoicecallRoutingModule } from './voicecall-routing.module';
import { VoicecallComponent } from './voicecall.component';


@NgModule({
  declarations: [VoicecallComponent],
  imports: [
    CommonModule,
    VoicecallRoutingModule
  ]
})
export class VoicecallModule { }
