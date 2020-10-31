import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';

const routes: Routes = [
	{
		path : '',
		component : PatientsComponent,
		children : [
	      {
	        path : 'favourites',
	        loadChildren: () => import(`./favourites/favourites.module`).then(m => m.FavouritesModule)  
	      },
	      {
	        path : 'settings',
	        loadChildren: () => import(`./settings/settings.module`).then(m => m.SettingsModule)  
	      },
	      {
	      	path : 'dashboard',
	        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
	      }
	    ]
	},
	{
      	path : 'dashboard',
        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
    },
	{
    	path : 'booking',
    	loadChildren : () => import('./booking/booking.module').then(m=>m.BookingModule)
	},
	{
		path : 'component',
		loadChildren : () => import('./component/component.module').then(m=>m.ComponentModule)
	},
	{
		path : 'patient-profile',
		loadChildren : () => import('./patient-profile/patient-profile.module').then(m=>m.PatientProfileModule)
	},
	{
		path : 'add-billing',
		loadChildren : () => import('./add-billing/add-billing.module').then(m=>m.AddBillingModule)
	},
	{
		path : 'edit-billing',
		loadChildren : () => import('./edit-billing/edit-billing.module').then(m=>m.EditBillingModule)
	},
	{
		path : 'add-prescription',
		loadChildren : () => import('./add-prescription/add-prescription.module').then(m=>m.AddPrescriptionModule)
	},
	{
		path : 'edit-prescription',
		loadChildren : () => import('./edit-prescription/edit-prescription.module').then(m=>m.EditPrescriptionModule)
	},
  	{	
  		path : 'doctor-profile',
    	loadChildren : () => import('./doctor-profile/doctor-profile.module').then(m=>m.DoctorProfileModule)
  	},
  	{
  		path : 'search-doctor',
    	loadChildren : () => import('./search-doctor/search-doctor.module').then(m=>m.SearchDoctorModule)
  	},
  	{
      	path : 'message',
        loadChildren: () => import(`./../doctor/messages/messages.module`).then(m=>m.MessagesModule)
    },
    {
      	path : 'success',
        loadChildren: () => import(`./success/success.module`).then(m=>m.SuccessModule)
    },
    {
      	path : 'checkout',
        loadChildren: () => import(`./checkout/checkout.module`).then(m=>m.CheckoutModule)
    }

  	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
