import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthgaurdService } from './shared/services/AuthgaurdService';

const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthgaurdService],
  },
  {
    path: 'auth',
    loadChildren: "./auth/auth.module#AuthModule",
    canActivate: [AuthgaurdService]
  },
  { path: '', redirectTo: '/auth/login', pathMatch : 'full'},
  { path: '**', redirectTo: '/auth/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
