import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children : [
  	]
  },

];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
