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
    var structures = [{id:1,addresse : 'Quartier Ancienne Sobraga B.P 8790 Libreville - Gabon', category : 'Cardiologues', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Cardiologie'], structure: 'CENTRE MEDICAL IMENO', tel : '+241 01 44 11 23 ou +241 05 98 55 15'},
      {id:2,addresse : 'Glass B.P 6945 Libreville - Gabon', category : 'Cardiologues', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Cardiologie'], structure: 'CUMC-CO - CENTRE D\'URGENCES MEDICO-CHIRURGICAL', tel : '+241 01 72 24 60 ou +241 06 66 90 45'},
      {id:3,addresse : 'Quartier Ancienne Sobraga B.P 8790 Libreville - Gabon', category : 'Cardiologues', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Cardiologie'], structure: 'CENTRE MEDICAL IMENO', tel : '+241 01 44 11 23 ou +241 05 98 55 15'},
      {id:4,addresse : 'Galerie d\'Ambre, face Mbolo B.P 4904 Libreville - Gabon', category : 'Cardiologues', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Cardiologie'], structure: 'CABINET DE CARDIOLOGIE ESTHER ET RAPHAEL', tel : '+241 07 52 71 70'},
      {id:5,addresse : 'Glass B.P 6945 Libreville - Gabon', category : 'Cardiologues', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Cardiologie'], structure: 'CUMC-CO - CENTRE D\'URGENCES MEDICO-CHIRURGICAL', tel : '+241 01 72 24 60 ou +241 06 66 90 45'},
      {id:6,addresse : 'Carrefour Léon Mba B.P 3568 Libreville - Gabon', category : 'Chirurgiens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Chirurgie'], structure: 'CABINET MEDICO-CHIRURGICAL DOCTEUR GAUSSIN', tel : '+241 01 74 69 00'},
      {id:7,addresse : 'Ambowé à gauche terminus taxis Libreville - Gabon', category : 'Chirurgiens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Chirurgie'], structure: 'CABINET MEDICO-CHIRURGICAL SAINT CÔME', tel : '+241 07 85 48 33 ou +241 02 90 78 68'},
      {id:8,addresse : 'Carrefour Léon Mba B.P 3568 Libreville - Gabon', category : 'Chirurgiens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Chirurgie'], structure: 'CABINET MEDICO-CHIRURGICAL DOCTEUR GAUSSIN', tel : '+241 01 74 69 00'},
      {id:9,addresse : 'Ambowé à gauche terminus taxis Libreville - Gabon', category : 'Chirurgiens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Chirurgie'], structure: 'CABINET MEDICO-CHIRURGICAL SAINT CÔME', tel : '+241 07 85 48 33 ou +241 02 90 78 68'},
      {id:10,addresse : 'La Peyrie B.P 2956 Libreville - Gabon', category : 'Cliniques - Polycliniques', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Ophtamologie', 'Urologie', 'Neurologie'], structure: 'ADA', tel : '+241 05 32 69 07 ou +241 07 94 30 04'},
      {id:11,addresse : 'Quartier Acae, entre carrefour Acae et Pont Nomba BP 9690 Libreville - Gabon', category : 'Cliniques - Polycliniques', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Ophtamologie', 'Urologie', 'Neurologie'], structure: 'CLINIQUE AMIEL', tel : '+241 01 70 58 01'},
      {id:12,addresse : 'Quartier Roger Buttin BP 1986 Port-Gentil - Gabon', category : 'Cliniques - Polycliniques', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Ophtamologie', 'Urologie', 'Neurologie'], structure: 'CLINIQUE AYILE', tel : '+241 07 39 03 93'},
      {id:13,addresse : 'Batterie IV face Ecole Gros Bouquet I dans l\'école Berlitz B.P 5524 Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE ATZENI & GUEDET-MACKANA', tel : '+241 01 44 49 61 ou +241 02 33 00 33 ou +241 01 44 34 27'},
      {id:14,addresse : 'Avenue de Cointet B.P 10073 Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DEMEL', tel : '+241 01 76 29 35 ou +241 06 32 96 05'},
      {id:15,addresse : 'Avenue de Cointet BP 13504 Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DEMEL (EX AYILE)', tel : '+241 01 76 29 35 ou +241 06 32 96 05'},
      {id:16,addresse : 'Montée de Louis Galerie Opio B.P 9211 Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DOCTEUR AVOMO MISTOUL', tel : '+241 06 64 63 65 ou +241 01 73 74 41'},
      {id:17,addresse : 'Montagne Sainte, près Cabinet de Groupe B.P 8309 Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DOCTEUR CHABBERT', tel : '+241 01 74 12 52 ou +241 07 11 41 10 ou +241 06 26 50 50'},
      {id:18,addresse : 'Centre ville ex boutique Supercfa 1300, Rue Alfred Marché Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DOCTEUR ESSONGUE', tel : '+241 01 76 56 37'},
      {id:19,addresse : 'Cabinet Dentaire de Batterie IV Libreville - Gabon', category : 'Dentistes - Cabinets dentaires', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dentiste'], structure: 'CABINET DENTAIRE DOCTEUR GAMASSA GOMES MURIEL', tel : '+241 01 44 41 05'},
      {id:20,addresse : 'Owendo / Alénakiri à 150m de Sobraga BP 12970 Libreville - Gabon', category : 'Diététiciens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dietetique'], structure: 'CABINET DE NUTRITION ET DIÉTÉTIQUE OWAS', tel : '+241 06 44 36 83 ou +241 05 48 32 58'},
      {id:21,addresse : 'Owendo / Alénakiri à 150m de Sobraga BP 12970 Libreville - Gabon', category : 'Diététiciens', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Dietetique'], structure: 'CABINET DE NUTRITION ET DIÉTÉTIQUE OWAS', tel : '+241 06 44 36 83 ou +241 05 48 32 58'},
      {id:22,addresse : 'Près de la Mairie du Haut de Gué Gué BP 13758 Libreville - Gabon', category : 'Equipements médicaux', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Equipement Médicaux'], structure: 'MEDEQUIP SARL', tel : '+241 0 65 988 101'},
      {id:23,addresse : 'en dessous de chez Pélisson B.P 25102 Libreville - Gabon', category : 'Equipements médicaux', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Equipement Médicaux'], structure: 'CONFORT MEDICAL', tel : '+241 07 67 41 74 ou +241 07 36 98 35'},
      {id:24,addresse : 'Cité Damas B.P 20320 Libreville - Gabon', category : 'Equipements médicaux', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Equipement Médicaux'], structure: 'ESTTM & CO', tel : '+241 01 74 67 67'},
      {id:25,addresse : 'Likouala à côté de la station B.P 5821 Libreville - Gabon', category : 'Gynécologue', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Gynécologie'], structure: 'CABINET MEDICAL CHINOIS DR YE', tel : '+24107585829'},
      {id:26,addresse : 'Montagne Sainte B.P 478 Libreville - Gabon', category : 'Gynécologue', profile: 'assets/img/doctors/doctor-thumb-03.png', services: ['Gynécologie'], structure: 'CABINET MÉDICAL LE JARDIN FLEURI', tel : '+241 01 76 20 82'},
    ]
    structures.forEach((elt)=>{

      this.db.collection("structures").doc('structure-'+elt.id).set({
        id:elt.id,
        addresse : elt.addresse,
        category : elt.category,
        profile : elt.profile,
        services : elt.services,
        structure : elt.structure,
        tel : elt.tel
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    });
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
              //this.commonService.nextmessage('patientLogin');
              this.router.navigate(['/patients/dashboard']);
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
            this.router.navigate(['/doctor/dashboard']);
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
