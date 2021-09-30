import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from './../../common-service.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
	id;
	doctorDetails;
  specialities;
  formations: any [];
  xps: any [];
  awards: any [];
  expertises: any [];
  accessInfos: any [];

  constructor(public commonService:CommonServiceService,private route: ActivatedRoute,private toastr: ToastrService, public router: Router) {

  }
  images = [
		{
			path: 'assets/img/features/feature-01.jpg',
		},
		{
			path: 'assets/img/features/feature-02.jpg',
		},
		{
			path: 'assets/img/features/feature-03.jpg',
		},
		{
			path: 'assets/img/features/feature-04.jpg',
		},
	];
  ngOnInit(): void {
    window.scrollTo(0, 0);
  	this.id = this.route.snapshot.queryParams["id"];
  	this.getDoctorsDetails();
  }

  getDoctorsDetails() {
    this.commonService.message.subscribe((res) => {
      if(res != undefined){
      // @ts-ignore
      var _res = JSON.parse(res);
      if(_res['page'] == 'doctor-profile') {
          // @ts-ignore
          this.doctorDetails = _res;
          this.formations = JSON.parse(this.doctorDetails.formations);
          this.xps = JSON.parse(this.doctorDetails.xps);
          this.awards = JSON.parse(this.doctorDetails.awards);
          this.expertises = this.doctorDetails.expertises;
          this.accessInfos = JSON.parse(this.doctorDetails.accessInfos);
          localStorage.setItem('currentdocProfile', JSON.stringify(this.doctorDetails));
        }else if (localStorage.getItem('currentdocProfile')) {
          this.doctorDetails = JSON.parse(localStorage.getItem('currentdocProfile'));
          this.formations = JSON.parse(this.doctorDetails.formations);
          this.xps = JSON.parse(this.doctorDetails.xps);
          this.awards = JSON.parse(this.doctorDetails.awards);
          this.expertises = this.doctorDetails.expertises;
          this.accessInfos = JSON.parse(this.doctorDetails.accessInfos);
      }
      }else if (res == undefined && localStorage.getItem('currentdocProfile')){
          this.doctorDetails = JSON.parse(localStorage.getItem('currentdocProfile'));
          this.formations = JSON.parse(this.doctorDetails.formations);
          this.xps = JSON.parse(this.doctorDetails.xps);
          this.awards = JSON.parse(this.doctorDetails.awards);
          this.expertises = this.doctorDetails.expertises;
          this.accessInfos = JSON.parse(this.doctorDetails.accessInfos);
        }
    });

    /*work code
    this.doctorDetails = JSON.parse(localStorage.getItem('searchDetails'));
    this.formations = JSON.parse(this.doctorDetails.formations);
    this.xps = JSON.parse(this.doctorDetails.xps);
    this.awards = JSON.parse(this.doctorDetails.awards);
    this.expertises = this.doctorDetails.expertises;
    this.accessInfos = JSON.parse(this.doctorDetails.accessInfos);
     */
  }

  addFav() {
    this.commonService.createFav(this.doctorDetails)
      .subscribe(res=>{
        this.toastr.success('', 'Added to favourite successfully!');
        document.getElementById("fav-btn").style.background = "#fb1612";
        document.getElementById("fav-btn").style.color = "#fff";
      })
  }


  book(id) {
    var data = JSON.parse(localStorage.getItem("docs"))[parseInt(id)];
    data['page'] = 'booking';
    this.commonService.nextmessage(JSON.stringify(data));
    this.router.navigateByUrl('/patients/booking');
  }
}
