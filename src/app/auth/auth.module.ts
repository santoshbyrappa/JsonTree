import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { SharedModule } from '../shared/shared.module';

import { AuthService } from './auth.service';

import { ModuleRouting } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    ModuleRouting,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ]
})
export class AuthModule { }
