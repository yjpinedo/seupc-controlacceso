import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from '../app/componentes/login/login.component';
//import { NotFoundComponent } from '../app/componentes/not-found/not-found.component';
import { RegisterComponent } from '../app/componentes/register/register.component'
//import { SignupComponent } from '../app/componentes/signup/signup.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent}
  //{path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
