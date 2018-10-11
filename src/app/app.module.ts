import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


// MODULES
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/http-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { AuthgaurdService } from './shared/services/AuthgaurdService';
import { MessagesComponent } from './shared/components/messages/messages.component';
// COMPONENTS
import { AppComponent } from './app.component';
import { MessageService } from './shared/components/messages/messages.service';

const providers = [

  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },

  AuthgaurdService,
  MessageService,

];

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
  ],
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
