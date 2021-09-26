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
  isPraticien: boolean = false;
  doctors: any = [];
  patients: any = [];
  username = '';
  password = '';
  public db = firebase.firestore();

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
  }

  checkType(event) {
    this.isPraticien = event.target.checked ? true : false;
  }

  loginByFacebook(){
    var self =this;
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // @ts-ignore
        var token = result.credential.accessToken;
        var user = result.user;

        if (!self.isPraticien) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('patient', self.isPraticien.toString());
          localStorage.setItem('id', user.email);
          //localStorage.setItem('id', filter[0]['id']);
          self.toastr.success('', 'Login success!');
          //this.commonService.nextmessage('patientLogin');
          //window.location.reload();
          self.router.navigate(['/patients/dashboard']);
        }else{
          localStorage.setItem('auth', 'true');
          localStorage.setItem('id', user.email);
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

      if (!self.isPraticien) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('patient', self.isPraticien.toString());
        localStorage.setItem('id', user.email);
        self.toastr.success('', 'Login success!');
        //this.commonService.nextmessage('patientLogin');
        //window.location.reload();
        self.router.navigate(['/patients/dashboard']);
      }else{
        localStorage.setItem('auth', 'true');
        localStorage.setItem('id', user.email);
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
    if (!this.isPraticien) {
      this.authservice.signInUser(name, password).then(
        () => {
          if(firebase.auth().currentUser.emailVerified) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('praticien', this.isPraticien.toString());
            //localStorage.setItem('id', filter[0]['id']);
            this.toastr.success('', 'Login success!');
            this.commonService.nextmessage('patientLogin');
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/patients/dashboard']);
            });
          }else {
            this.toastr.error('Please validate your email adress!', 'Login failed!');
          }
        },
        () => {
          this.toastr.error('email/password  incorect', 'echec authentification !');
        }
      );
    } else {
      this.authservice.signInUser(name, password).then(
        () => {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('id', name);
          localStorage.setItem('praticien', this.isPraticien.toString());
          this.toastr.success('', 'Login success!');
          //this.commonService.nextmessage('doctorLogin');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/doctor/dashboard']);
          });

        },
        () => {
          this.toastr.error('', 'Login failed!');
        }
      );
    }

  }

  getDoctors() {
    this.doctors=[];
    this.db.collection("doctors").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.doctors.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getpatients() {
    this.patients=[];
    this.db.collection("patients").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.patients.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  authUser(email, password, profil){
    this.authservice.signInUser(name, password).then(
      ()=>{
        localStorage.setItem('auth', 'true');
        localStorage.setItem(profil, this.isPraticien.toString());
        localStorage.setItem('id', name);
        this.toastr.success('', 'authentification reussi!');
        this.router.navigate(['/patients/dashboard']);
      },
      ()=>{
        this.toastr.error('', 'Echec authentification!');
      }
    );
  }

}
