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
  reg_type = 'Patient';
  doc_patient = 'Etes-vous praticien ?';
  constructor(private toastr: ToastrService,public commonService:CommonServiceService,public router:Router,private authService: AuthService) { }
  ngOnInit() {
    //this.getpatients();
    //this.getDoctors();
  }


  changeRegType() {
    if(this.reg_type == 'Praticien') {
      this.reg_type = 'Patient';
      this.doc_patient = 'Etes-vous praticien ?';
    } else {
      this.reg_type = 'Praticien';
      this.doc_patient = "Vous n'êtes pas praticien ?";
    }
  }

  signup() {
    if(this.name === ''  || this.password === '') {
      this.toastr.error('', 'Veuillez renseigner les champs obligatoires!');
    } else {
      if(!this.isPatient) {
        this.authService.createNewUser(this.name, this.password).then(
          ()=>{
            this.toastr.success('', 'Bravo, un email vous a été envoyé pour valider votre compte');
            this.router.navigate(['/login']);
          },
          (error)=>{
            this.toastr.error(error, 'Erreur');
          }
        );
      } else {
        this.authService.createNewUser(this.name, this.password).then(
          ()=>{
            this.toastr.success('', 'Inscription reussi !');
            this.router.navigate(['/login']);
          },
          (error)=>{
            this.toastr.error(error, 'Echec lors de la création de votre compte');
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
