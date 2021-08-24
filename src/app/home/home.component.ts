import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
// @ts-ignore
import moment from 'moment';

declare const $: any;

import firebase from 'firebase/app';

import "firebase/auth";
import 'firebase/firestore';
import {getTime} from 'ngx-bootstrap/chronos/utils/date-getters';

export interface Doctors {
  id: number;
  doctor_name: string;
  speciality: string;
  Education: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild('slickModal1') slickModal1: SlickCarouselComponent;
  @ViewChild('slickModal2') slickModal2: SlickCarouselComponent;
  @ViewChild('slickModal3') slickModal3: SlickCarouselComponent;
  specialityList: any = [];
  doctors: any = [];
  slidepage: any;
  employeeCtrl = new FormControl();
  filteredEmployee: Observable<Doctors[]>;
  blogs: any = [];
  keyword = 'name';
  searchDoctor = [];
  public countries = [];
  advantages: any = [];
  public db = firebase.firestore();

  constructor(
    public router: Router,
    public commonService: CommonServiceService
  ) {
    this.filteredEmployee = this.employeeCtrl.valueChanges.pipe(
      startWith(''),
      map((employee) =>
        employee ? this._filterEmployees(employee) : this.doctors.slice()
      )
    );
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getspeciality();
    this.getDoctors();
    this.getCountries();
    this.getblogs();
    this.getAdvantages();


    // User's voice slider
    $('.testi-slider').each(function () {
      var $show = $(this).data('show');
      var $arr = $(this).data('arrow');
      var $dots = !$arr;
      var $m_show = $show;
      if ($show == 3) $m_show = $show - 1;
      $(this).slick({
        slidesToShow: $show,
        slidesToScroll: 1,
        arrows: $arr,
        autoplay: false,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow:
          '<button type="button" class="prev-nav"><i class="icon ion-ios-arrow-back"></i></button>',
        nextArrow:
          '<button type="button" class="next-nav"><i class="icon ion-ios-arrow-forward"></i></button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: $m_show,
              slidesToScroll: 1,
              infinite: true,
              arrows: $arr,
              dots: $dots,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      });
    });
  }
  private _filterEmployees(value: string): Doctors[] {
    const filterValue = value.toLowerCase();
    return this.doctors.filter(
      (state) => state.doctor_name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  slides = [];
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig2 = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  slideConfig3 = {
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  next() {
    this.slickModal1.slickNext();
  }

  prev() {
    this.slickModal1.slickPrev();
  }

  getspeciality() {
    this.specialityList=[];
    this.slides = [];
    this.db.collection("specialities").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.specialityList.push(doc.data());
        // @ts-ignore
        this.slides.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getDoctors() {
    this.slidepage = {
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    this.searchDoctor = []
    this.db.collection("doctors").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        this.searchDoctor.push({
          id: doc.data().id,
          name: doc.data().doctor_name,
        });
        this.doctors.push(doc.data())
      });
    }).catch((error)=>{
      console.log(error);
    });

    this.db.collection("specialities").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        this.searchDoctor.push({
          id: doc.data().id,
          name: doc.data().speciality,
        });
      });
    }).catch((error)=>{
      console.log(error);
    });

    this.db.collection("structures").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.searchDoctor.push({
          id: doc.data().id,
          name: doc.data().structure,
        });
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getCountries() {
    this.countries = []
    this.db.collection("villes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        this.countries.push({
          id: doc.data().id,
          name: doc.data().nom,
        });
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getblogs() {
    this.blogs = []
    this.db.collection("blogs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        this.blogs.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getAdvantages() {
    this.advantages = []
    this.db.collection("advantages").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // @ts-ignore
        this.advantages.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  selectDoctorEvent(item) {
    let filter = this.searchDoctor.filter((a) => a.name === item.name);
    this.router.navigateByUrl('/patients/doctor-profile?id=' + filter[0].id);
    // do something with selected item
  }

  selectContryEvent(item) {
    let filter = this.countries.filter((a) => a.name === item.name);
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  slideConfigure = {
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: true,
  };
  nextslide() {
    this.slickModal2.slickNext();
  }

  prevslide() {
    this.slickModal2.slickPrev();
  }

  nextpage() {
    this.slickModal3.slickNext();
  }

  prevpage() {
    this.slickModal3.slickPrev();
  }
}
