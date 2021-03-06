import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { UserComponent } from './display/user/user.component';
import { UpdateComponent } from './display/update/update.component';
import { CreateComponent } from './create/create.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { BulkCreateComponent } from './bulk-create/bulk-create.component';
import { CustomValidatorComponent } from './validators/custom-validator/custom-validator.component';
import { ParentComponent } from './play/parent/parent.component';
import { ChildComponent } from './play/child/child.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DoctorsComponent } from './display/doctors/doctors.component';
import { PatientsComponent } from './display/patients/patients.component';
import { SharedModule } from './shared/shared.module';
import { Sib1Component } from './play/sib1/sib1.component';
import { Sib2Component } from './play/sib2/sib2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DisplayComponent,
    UserComponent,
    UpdateComponent,
    CreateComponent,
    SampleFormComponent,
    BulkCreateComponent,
    CustomValidatorComponent,
    ParentComponent,
    ChildComponent,
    DoctorsComponent,
    PatientsComponent,
    Sib1Component,
    Sib2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
