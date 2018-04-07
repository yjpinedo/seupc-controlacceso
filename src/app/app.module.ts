import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PanelControlComponent } from './componentes/panel-control/panel-control.component';
import { SideMenuComponent } from './componentes/side-menu/side-menu.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { CargarFileComponent } from './componentes/cargar-file/cargar-file.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    NotFoundComponent,
    PanelControlComponent,
    SideMenuComponent,
    HeaderComponent,
    BodyComponent,
    CargarFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
