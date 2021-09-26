import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth: boolean = false;
  isPraticien: boolean = true;
  page;
  constructor(
    @Inject(DOCUMENT) private document,
    private cdr: ChangeDetectorRef,
    public router: Router,
    public commonService: CommonServiceService
  ) {
    this.commonService.message.subscribe((res) => {
      if (res === 'patientLogin') {
        this.auth = true;
        // this.isPatient = true;
      }
      if (res === 'doctorLogin') {
        this.auth = true;
        // this.isPatient = false;
      }
      if (res === 'logout') {
        this.auth = false;
        this.isPraticien = false;
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('auth') === 'true') {
      this.auth = true;
      this.isPraticien = localStorage.getItem('praticien') === 'true' ? true : false;
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  mapGrid() {
    this.router.navigate(['/map-grid']);
  }

  mapList() {
    this.router.navigate(['/map-list']);
  }

  addStyle() {
    if (document.getElementById('submenu').style.display == 'block') {
      document.getElementById('submenu').style.display = 'none';
    } else {
      document.getElementById('submenu').style.display = 'block';
    }
  }

  doctor(name) {
    this.page = name;
    this.router.navigate(['/doctor/dashboard']);
  }

  logout() {
    localStorage.clear();
    this.auth = false;
    this.isPraticien = false;
    this.router.navigate(['/login']);
  }

  home() {
    this.commonService.nextmessage('main');
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/']);
    });
  }

  navigate(name) {
    this.page = name;
    if (name === 'Admin') {
      this.router.navigate(['/admin']);
      this.commonService.nextmessage('admin');
    }
  }
}
