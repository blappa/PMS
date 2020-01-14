import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientComponent } from './client/client.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'welcome', component : WelcomeComponent},
  {path : 'client', component : ClientComponent},
  {path : 'receptionist', component : ReceptionistComponent},
  {path : 'doctor', component : DoctorComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }