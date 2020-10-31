import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapGridComponent } from './map-grid.component';
import { MapGridRoutingModule } from './map-grid-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgSelect2Module } from 'ng-select2';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

@NgModule({
  declarations: [MapGridComponent],
  imports: [
    CommonModule,
    MapGridRoutingModule,
    GoogleMapsModule,
    NgSelect2Module,
    CrystalLightboxModule,
  ],
})
export class MapGridModule {}
