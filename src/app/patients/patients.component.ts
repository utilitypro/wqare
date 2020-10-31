import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

import { CommonServiceService } from './../common-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  splitVal;
  base = 'Patients';
  page = 'Dashboard';
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });
  }
}
