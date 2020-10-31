import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapListComponent } from './map-list.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapListRoutingModule } from './map-list-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

@NgModule({
  declarations: [MapListComponent],
  imports: [
    CommonModule,
    MapListRoutingModule,
    GoogleMapsModule,
    NgSelect2Module,
    CrystalLightboxModule,
  ],
})
export class MapListModule {}
