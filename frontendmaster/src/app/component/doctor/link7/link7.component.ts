import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link7',
  templateUrl: './link7.component.html',
  styleUrls: ['./link7.component.css','../doctor.component.css']
})
export class Link7Component implements OnInit {
  client_info : boolean = true;
  appointments : boolean = true;
  f_name :String;
  l_name :String;
  time :String;
  appointment_type :String;

  instructions : String;

  constructor() { }

  ngOnInit() {
  }

  patientInfo(){
    // make a reference to the patient information
    this.client_info = false;
    console.log("check row click");
  }

  showAppointments(){
    // make a reference to the patient information
    this.appointments = false;
    console.log("show list of appointments");
  }

  cancelAppointment(){
    //cancel an appointment
    
    console.log("Canceled");
  }

  sendToReceptionist(){
    this.instructions = '';
    console.log("Sent to receptionist");
  }

  reschedulelAppointment(){
    //sheffulai has a component to view the schedule, so we can call the component here, and make changes
    //into appointment
    console.log("Reschedule appointment");
  }

}
