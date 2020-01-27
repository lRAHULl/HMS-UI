import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './display/update/update.component';
import { UserComponent } from './display/user/user.component';
import { SecureGuard } from './secure.guard';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'display',
    component: DisplayComponent,
    canActivate: [SecureGuard]
  },
  {path: 'display/:id/update', component: UpdateComponent, canActivate: [SecureGuard]},
  {path: 'display/:id', component: UserComponent, canActivate: [SecureGuard]},
  {path: 'create/:role', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
