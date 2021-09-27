import {Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import firebase from 'firebase/app';
import "firebase/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  constructor(private toastr: ToastrService,
              public router: Router
  ) { }

  ngOnInit(): void {
  }

  resetPassword(email){
    firebase.auth().sendPasswordResetEmail(email).then(
      () => {
        this.toastr.success("Un email de reinitialisation vous a été envoyé");
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.toastr.error("Une erreur s'est produite lors de la reinitialisation" + this.email);
      }
    );

  }

}
