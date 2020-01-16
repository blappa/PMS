import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from './component/receptionist/receptionist.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ClientComponent } from './component/client/client.component';
import { MenuComponent } from './component/menu/menu.component';
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
import { UserComponent } from './component/user/user.component';
import { Link16Component } from './component/user/link16/link16.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    DoctorComponent,
    ContactComponent,
    AboutComponent,
    ClientComponent,
    MenuComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    Link4Component,
    Link5Component,
    Link6Component,
    Link7Component,
    Link8Component,
    Link9Component,
    Link10Component,
    Link11Component,
    Link12Component,
    Link13Component,
    Link14Component,
    Link15Component,
    UserComponent,
    Link16Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
