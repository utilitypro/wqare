import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Location } from '@angular/common';
import { CommonServiceService } from './common-service.service';
import firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'doccur';
  url;
  loadFooter = false;
  show = true;
  hideFooter = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public Router: Router,
    location: Location,
    public commonServic: CommonServiceService
  ) {
    Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (
          event.url == '/login' ||
          event.url == '/forgot-password' ||
          event.url == '/Register'
        ) {
          document.querySelector('body').classList.add('account-page');
          document.querySelector('body').classList.remove('mat-typography');
          if (event.url == '/login') {
            this.Router.navigateByUrl('/login');
          }
        } else {
          document.querySelector('body').classList.remove('account-page');
          document.querySelector('body').classList.add('mat-typography');
        }
        if (event.url == '/map-grid') {
          this.hideFooter = true;
        }
        if (event.url == '/video-call' || event.url == '/voice-call') {
          document.querySelector('body').classList.add('call-page');
          document.querySelector('body').classList.remove('mat-typography');
        } else {
          document.querySelector('body').classList.remove('call-page');
          document.querySelector('body').classList.add('mat-typography');
        }
      }
    });
    this.url = location.path();
    this.show = this.url.includes('admin') ? false : true;
    this.commonServic.message.subscribe((res) => {
      if (res === 'admin') {
        this.show = false;
        this.hideFooter = true;
      } else if (res === 'main') {
        this.show = true;
        this.hideFooter = false;
      } else if (res === 'chat') {
        this.show = true;
        this.hideFooter = true;
      } else {
        this.show = true;
        this.hideFooter = false;
      }
    });

    const config = {
      apiKey: 'AIzaSyBB6Z6sOeI3y-NtiDsPTKwfkbXz7QshejI',
      authDomain: 'tekkare-5f0d1.firebaseapp.com',
      databaseURL: 'https://tekkare-5f0d1.firebaseio.com',
      projectId: 'tekkare-5f0d1',
      storageBucket: 'tekkare-5f0d1.appspot.com',
      messagingSenderId: '922075743779',
      appId: '1:922075743779:web:47fb67e1df6c43c5649396',
      measurementId: 'G-JBMW224EC9'
    };
    // @ts-ignore
    firebase.initializeApp(config);
    //firebase.analytics();
  }

  ngOnInit() {
    setTimeout(() => (this.loadFooter = true), 2000);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
