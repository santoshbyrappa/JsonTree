import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children : [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
  	]
  },

];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
