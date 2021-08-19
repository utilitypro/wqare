import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service'

import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../authService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = '' ;
  mobile = '' ;
  password = '';
  isPatient : boolean = false;
  doctors:any = [];
  patients:any = [];
  reg_type = 'Patient Register';
  doc_patient = 'Are you a Doctor?';
  constructor(private toastr: ToastrService,public commonService:CommonServiceService,public router:Router,private authService: AuthService) { }
  ngOnInit() {
    //this.getpatients();
    //this.getDoctors();
  }


  changeRegType() {
    if(this.reg_type == 'Doctor Register') {
      this.reg_type = 'Patient Register';
      this.doc_patient = 'Are you a Doctor?';
    } else {
      this.reg_type = 'Doctor Register';
      this.doc_patient = 'Not a Doctor?';
    }
  }

  signup() {
    if(this.name === '' || this.mobile === '' || this.password === '') {
      this.toastr.error('', 'Please enter mandatory field!');
    } else {
      if(!this.isPatient) {
        this.authService.createNewUser(this.name, this.password).then(
          ()=>{
            this.toastr.success('', 'Register successfully! Validate your email adress');
            this.router.navigate(['/login']);
          },
          (error)=>{
            this.toastr.error(error, 'Register Error');
          }
        );
      } else {
        this.authService.createNewUser(this.name, this.password).then(
          ()=>{
            this.toastr.success('', 'Register successfully!');
            this.router.navigate(['/login']);
          },
          (error)=>{
            this.toastr.error(error, 'Register Error');
          }
        );
      }
    }
  }

  getDoctors() {
    this.commonService.getDoctors().subscribe(res=>{
      this.doctors = res;
    })
  }

  getpatients() {
    this.commonService.getpatients().subscribe(res=>{
      this.patients = res;
    })
  }

}
