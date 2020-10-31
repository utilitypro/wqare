import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorRoutingModule } from './search-doctor-routing.module';
import { SearchDoctorComponent } from './search-doctor.component';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

@NgModule({
  declarations: [SearchDoctorComponent],
  imports: [
    NgSelect2Module,
    CommonModule,
    SearchDoctorRoutingModule,
    NgbModule,
    CrystalLightboxModule
  ]
})
export class SearchDoctorModule { }
