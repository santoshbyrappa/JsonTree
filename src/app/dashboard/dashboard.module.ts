import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { SharedModule } from '../shared/shared.module';

import { ModuleRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardService } from './dashboard.service';

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
    DashboardService
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
