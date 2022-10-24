import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoginGuard } from './guards/can-login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../login/login.module').then(module => module.LoginModule),
    canActivate: [CanLoginGuard],
  },
  {
    path: 'register',
    loadChildren: () => import('../registration/registration.module').then(module => module.RegistrationModule),
  },
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class AuthShellRoutingModule { }
