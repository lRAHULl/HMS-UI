import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './display/update/update.component';
import { UserComponent } from './display/user/user.component';
import { SecureGuard } from './secure.guard';
import { CreateComponent } from './create/create.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ParentComponent } from './play/parent/parent.component';
import { DoctorsComponent } from './display/doctors/doctors.component';
import { PatientsComponent } from './display/patients/patients.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'display',
    component: DisplayComponent,
    // canActivate: [SecureGuard],
    children: [
      {path: 'doctors', component: DoctorsComponent},
      {path: 'patients', component: PatientsComponent}
    ]
  },
  {path: 'play', component: ParentComponent},
  {path: 'display/:role/:id/update', component: UpdateComponent, canActivate: [SecureGuard]},
  {path: 'display/:role/:id', component: UserComponent, canActivate: [SecureGuard]},
  {path: 'create/:role', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
