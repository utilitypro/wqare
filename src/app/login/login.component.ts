import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../authService.service';
import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPatient: boolean = false;
  doctors: any = [];
  patients: any = [];
  username = '';
  password = '';
  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    private toastr: ToastrService,
    private authservice : AuthService
  ) {
    this.username = '';
    this.password = '';
    this.doctors = [];
    this.patients = [];
  }

  ngOnInit(): void {
    this.getpatients();
    this.getDoctors();
  }

  checkType(event) {
    this.isPatient = event.target.checked ? true : false;
  }

  loginByFacebook(){
    var self =this;
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // @ts-ignore
        var token = result.credential.accessToken;
        var user = result.user;

        if (self.isPatient) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('patient', self.isPatient.toString());
          //localStorage.setItem('id', filter[0]['id']);
          self.toastr.success('', 'Login success!');
          //this.commonService.nextmessage('patientLogin');
          //window.location.reload();
          self.router.navigate(['/patients/dashboard']);
        }else{
          localStorage.setItem('auth', 'true');
          //localStorage.setItem('id', filter[0]['id']);
          self.toastr.success('', 'Login success!');
          //this.commonService.nextmessage('doctorLogin');
          //window.location.reload();
          self.router.navigate(['/doctor/dashboard']);
        }

        //console.log(token)
        //console.log(user)
      }).catch(function(error) {
     // console.log(error.code);
      //console.log(error.message);
      self.toastr.error(error.message, 'Login failed!');

    });
  }

  loginByGoogle(){
    var self = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider).then(function(result) {
      // @ts-ignore
      var token = result.credential.accessToken;
      var user = result.user;

      if (self.isPatient) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('patient', self.isPatient.toString());
        //localStorage.setItem('id', filter[0]['id']);
        self.toastr.success('', 'Login success!');
        //this.commonService.nextmessage('patientLogin');
        //window.location.reload();
        self.router.navigate(['/patients/dashboard']);
      }else{
        localStorage.setItem('auth', 'true');
        //localStorage.setItem('id', filter[0]['id']);
        self.toastr.success('', 'Login success!');
        //this.commonService.nextmessage('doctorLogin');
       // window.location.reload();
        self.router.navigate(['/doctor/dashboard']);
      }
      //console.log(token)
      //console.log(user)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      self.toastr.error(errorMessage, 'Login failed!');
      //console.log(error.code)
      //console.log(error.message)
    });
  }

  login(name, password) {
      if (this.isPatient) {
        this.authservice.signInUser(name, password).then(
          () => {
            if(firebase.auth().currentUser.emailVerified) {
              localStorage.setItem('auth', 'true');
              localStorage.setItem('patient', this.isPatient.toString());
              //localStorage.setItem('id', filter[0]['id']);
              this.toastr.success('', 'Login success!');
              //this.commonService.nextmessage('patientLogin');
              window.location.reload();
              //this.router.navigate(['/patients/dashboard']);
            }else {
              this.toastr.error('Please validate your email adress!', 'Login failed!');
            }
          },
          () => {
            this.toastr.error('email/password is incorect', 'Login failed!');
          }
        );
      } else {
        this.authservice.signInUser(name, password).then(
          () => {
            localStorage.setItem('auth', 'true');
            //localStorage.setItem('id', filter[0]['id']);
            this.toastr.success('', 'Login success!');
            //this.commonService.nextmessage('doctorLogin');
            window.location.reload();
            //this.router.navigate(['/doctor/dashboard']);
          },
          () => {
            this.toastr.error('', 'Login failed!');
          }
        );
      }

  }

  getDoctors() {
    this.commonService.getDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.patients = res;
    });
  }

  authUser(email, password, profil){
    this.authservice.signInUser(name, password).then(
      ()=>{
        localStorage.setItem('auth', 'true');
        localStorage.setItem(profil, this.isPatient.toString());
        //localStorage.setItem('id', filter[0]['id']);
        this.toastr.success('', 'Login success!');
        this.router.navigate(['/patients/dashboard']);
      },
      ()=>{
        this.toastr.error('', 'Login failed!');
      }
    );
  }
}
