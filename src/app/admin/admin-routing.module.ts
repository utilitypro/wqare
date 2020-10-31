import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'forgot-pass',
        loadChildren: () =>
          import(
            './pages/authendication/forgot-password/forgot-password.module'
          ).then((m) => m.ForgotPasswordModule),
      },
      {
        path: 'admin-invoice',
        loadChildren: () =>
          import('./invoice/admin-invoice.module').then(
            (m) => m.AdminInvoiceModule
          ),
      },
      {
        path: 'doc-profile',
        loadChildren: () =>
          import('./doc-profile/doc-profile.module').then(
            (m) => m.DocProfileModule
          ),
      },
      {
        path: 'lock-screen',
        loadChildren: () =>
          import('./pages/authendication/lock-screen/lock-screen.module').then(
            (m) => m.LockScreenModule
          ),
      },
      {
        path: 'login-page',
        loadChildren: () =>
          import('./pages/authendication/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./pages/authendication/regiser/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'blank-page',
        loadChildren: () =>
          import('./pages/blank-page/blank-page.module').then(
            (m) => m.BlankPageModule
          ),
      },
      {
        path: 'error-first',
        loadChildren: () =>
          import('./pages/error-pages/error-first/error-first.module').then(
            (m) => m.ErrorFirstModule
          ),
      },
      {
        path: 'error-second',
        loadChildren: () =>
          import('./pages/error-pages/error-second/error-second.module').then(
            (m) => m.ErrorSecondModule
          ),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./ui-interface/components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'basic-input',
        loadChildren: () =>
          import('./ui-interface/forms/basic-inputs/basic-inputs.module').then(
            (m) => m.BasicInputsModule
          ),
      },
      {
        path: 'form-validation',
        loadChildren: () =>
          import(
            './ui-interface/forms/form-validation/form-validation.module'
          ).then((m) => m.FormValidationModule),
      },
      {
        path: 'horizondal-form',
        loadChildren: () =>
          import(
            './ui-interface/forms/horizondal-form/horizondal-form.module'
          ).then((m) => m.HorizondalFormModule),
      },
      {
        path: 'input-groups',
        loadChildren: () =>
          import('./ui-interface/forms/input-groups/input-groups.module').then(
            (m) => m.InputGroupsModule
          ),
      },
      {
        path: 'vertical-form',
        loadChildren: () =>
          import(
            './ui-interface/forms/vertical-form/vertical-form.module'
          ).then((m) => m.VerticalFormModule),
      },
      {
        path: 'form-mask',
        loadChildren: () =>
          import('./ui-interface/forms/form-mask/form-mask.module').then(
            (m) => m.FormMaskModule
          ),
      },
      {
        path: 'basic-tables',
        loadChildren: () =>
          import('./ui-interface/tables/basic-tables/basic-tables.module').then(
            (m) => m.BasicTablesModule
          ),
      },
      {
        path: 'admin-data-table',
        loadChildren: () =>
          import(
            './ui-interface/tables/admin-data-table/admin-data-table.module'
          ).then((m) => m.AdminDataTableModule),
      },
      {
        path: 'appointment',
        loadChildren: () =>
          import(`./appointments/appointments.module`).then(
            (m) => m.AppointmentsModule
          ),
      },
      {
        path: 'specialities',
        loadChildren: () =>
          import(`./specialities/specialities.module`).then(
            (m) => m.SpecialitiesModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import(`./blog/blog.module`).then((m) => m.BlogModule),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import(`./patients/patients.module`).then((m) => m.PatientsModule),
      },
      {
        path: 'doctor',
        loadChildren: () =>
          import(`./doctors/doctors.module`).then((m) => m.DoctorsModule),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsModule),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'invoice-reports',
        loadChildren: () =>
          import('./invoice-reports/invoice-reports.module').then(
            (m) => m.InvoiceReportsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
