import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from './../../common-service.service'
import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import {AuthService} from '../../authService.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  doctorDetails;
  doctorId;
  firstName;
  lastName;
  email;
  phone;
  appointments: any = [];
  patients: any = [];
  date: any;
  time: any;
  doctors: any = [];
  username = '';
  password = '';
  isPraticien: boolean = false;

  public db = firebase.firestore();
  isConnected = 'false';

  constructor(private authservice: AuthService, private router: Router, private route: ActivatedRoute, public commonService: CommonServiceService, private toastr: ToastrService) {
    this.username = '';
    this.password = '';
    this.doctors = [];
    this.patients = [];
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.queryParams["id"];
    this.date = this.route.snapshot.queryParams["date"];
    this.time = this.route.snapshot.queryParams["time"];
    if(localStorage.getItem('auth') == 'true'){
      this.isConnected = 'true';
    }
    this.getDoctorsDetails(this.doctorId);
    this.allPatients();
    this.getAppointments();
  }

  getDoctorsDetails(doctorId) {
    this.doctorDetails = JSON.parse(localStorage.getItem("docs"))[parseInt(doctorId)]
  }

  allPatients() {
    this.commonService.getpatients()
      .subscribe(res => {
        this.patients = res;
      })
  }

  patientDetails() {
    let userId = localStorage.getItem('id');
    this.commonService.getPatientDetails(Number(userId))
      .subscribe(res => {
        this.patients = res;
      })
  }

  getAppointments() {
    this.commonService.getAppointments()
      .subscribe(res => {
        this.appointments = res;
      })
  }

  booking() {
    let value = this.patients.reverse();
    let key = value[0]['key'] + '1'
    let params = {
      id: this.appointments.length + 1,
      doctorName: this.doctorDetails.doctor_name,
      type: "New patient",
      speciality: this.doctorDetails.speciality,
      patient_key: key,
      Patient_Name: this.firstName + this.lastName,
      appointment_time: new Date(),
      status: "active",
      amount: this.doctorDetails.Price
    }
    this.commonService.createAppointment(params)
      .subscribe(res => {
        let patients = {
          id: this.patients.length + 1,
          key: key,
          name: this.firstName + this.lastName,
          phone: this.phone,
          email: this.email,
          paid: this.doctorDetails.Price
        }
        this.commonService.createPatient(patients)
          .subscribe(patients => {
            this.allPatients();
            this.getAppointments();
            this.toastr.success('', 'Appointment booked successfully!');
            this.router.navigate(['/patients/success']);

          })
      })
  }


  loginByFacebook() {
    var self = this;
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
          location.reload();
          /*self.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            self.router.navigate(['/patients/checkout?id='+self.doctorId+'&date='+self.date +'&time='+self.time]);
          });*/
        } else {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('id', user.email);
          self.toastr.success('', 'Login success!');
          //this.commonService.nextmessage('doctorLogin');
          location.reload();
          /*self.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            self.router.navigate(['/patients/checkout?id='+self.doctorId+'&date='+self.date +'&time='+self.time]);
          });*/
        }

        //console.log(token)
        //console.log(user)
      }).catch(function(error) {
      // console.log(error.code);
      //console.log(error.message);
      self.toastr.error(error.message, 'Login failed!');

    });
  }

  loginByGoogle() {
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
        location.reload();
        /*self.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          self.router.navigate(['/patients/checkout?id='+self.doctorId+'&date='+self.date +'&time='+self.time]);
        });*/
      } else {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('id', user.email);
        self.toastr.success('', 'Login success!');
        //this.commonService.nextmessage('doctorLogin');
        // window.location.reload();
        location.reload();
        /*self.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          self.router.navigate(['/patients/checkout?id='+self.doctorId+'&date='+self.date +'&time='+self.time]);
        });*/
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
          if (firebase.auth().currentUser.emailVerified) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('praticien', this.isPraticien.toString());
            //localStorage.setItem('id', filter[0]['id']);
            this.toastr.success('', 'Login success!');
            //this.commonService.nextmessage('patientLogin');
            location.reload();
            /*this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/patients/checkout?id='+this.doctorId+'&date='+this.date +'&time='+this.time]);
            });*/
          } else {
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
          location.reload();
          //this.commonService.nextmessage('doctorLogin');
          //this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          //  location.reload();//this.router.navigate(['/patients/checkout?id='+this.doctorId+'&date='+this.date +'&time='+this.time]);
         // });
        },
        () => {
          this.toastr.error('', 'Login failed!');
        }
      );
    }

  }

  getDoctors() {
    this.doctors = [];
    this.db.collection("doctors").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.doctors.push(doc.data());
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  getpatients() {
    this.patients = [];
    this.db.collection("patients").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.patients.push(doc.data());
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  authUser(email, password, profil) {
    this.authservice.signInUser(name, password).then(
      () => {
        localStorage.setItem('auth', 'true');
        localStorage.setItem(profil, this.isPraticien.toString());
        localStorage.setItem('id', name);
        this.toastr.success('', 'authentification reussi!');
        this.router.navigate(['/patients/checkout?id='+this.doctorId+'&date='+this.date +'&time='+this.time]);
      },
      () => {
        this.toastr.error('', 'Echec authentification!');
      }
    );
  }

  checkType(event) {
    this.isPraticien = event.target.checked ? true : false;
  }

}


