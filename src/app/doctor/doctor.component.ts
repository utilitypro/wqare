import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { CommonServiceService } from './../common-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DoctorComponent implements OnInit {
  splitVal;
  base = 'Doctor';
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
