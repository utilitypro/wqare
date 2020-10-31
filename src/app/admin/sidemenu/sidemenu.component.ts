import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

import { CommonServiceService } from '../../common-service.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  page = 'Dashboard';
  showDropdown = true;
  public bellCollapsed = true;
  public userCollapsed = true;

  constructor(
    @Inject(DOCUMENT) private document,
    public router: Router,
    private commonService: CommonServiceService
  ) {}

  ngOnInit(): void {}

  change(name) {
    this.page = name;
    this.commonService.nextmessage('admin');
  }

  main() {
    this.commonService.nextmessage('main');
    // this.router.navigateByUrl('/',{ skipLocationChange: true }).then(()=>{
    //   window.location.reload('/')
    //      this.router.navigate(['/']);
    //   //;
    // })
  }
}
