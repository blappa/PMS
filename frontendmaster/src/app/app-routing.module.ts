import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link1Component } from './component/client/link1/link1.component';
import { Link2Component } from './component/client/link2/link2.component';
import { Link3Component } from './component/client/link3/link3.component';
import { Link4Component } from './component/receptionist/link4/link4.component';
import { Link5Component } from './component/receptionist/link5/link5.component';
import { Link6Component } from './component/receptionist/link6/link6.component';
import { Link7Component } from './component/doctor/link7/link7.component';
import { Link8Component } from './component/doctor/link8/link8.component';
import { Link9Component } from './component/doctor/link9/link9.component';
import { Link10Component } from './component/contact/link10/link10.component';
import { Link11Component } from './component/contact/link11/link11.component';
import { Link12Component } from './component/contact/link12/link12.component';
import { Link13Component } from './component/about/link13/link13.component';
import { Link14Component } from './component/about/link14/link14.component';
import { Link15Component } from './component/about/link15/link15.component';
import { Link16Component } from './component/user/link16/link16.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {path : 'logout', component : Link1Component},
  {path : 'link1', component : Link1Component},
  {path : 'link2', component : Link2Component},
  {path : 'link3', component : Link3Component},
  {path : 'link4', component : Link4Component},
  {path : 'link5', component : Link5Component},
  {path : 'link6', component : Link6Component},
  {path : 'link7', component : Link7Component},
  {path : 'link8', component : Link8Component},
  {path : 'link9', component : Link9Component},
  {path : 'link10', component : Link10Component},
  {path : 'link11', component : Link11Component},
  {path : 'link12', component : Link12Component},
  {path : 'link13', component : Link13Component},
  {path : 'link14', component : Link14Component},
  {path : 'link15', component : Link15Component},
  {path : 'link16', component : Link16Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}