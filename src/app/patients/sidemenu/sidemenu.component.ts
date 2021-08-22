import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';

import firebase from 'firebase/app';
import "firebase/auth";
import {AuthService} from '../../authService.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name;
  constructor(
    private router: Router,
    private authservice : AuthService,
    public commonService: CommonServiceService
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.authservice.signOutUser();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/']);
  }

  navigate(name) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
