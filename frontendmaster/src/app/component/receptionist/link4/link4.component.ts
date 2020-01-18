import { Component, OnInit, Input, Directive } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link4',
  templateUrl: './link4.component.html',
  styleUrls: ['./link4.component.css','../receptionist.component.css']
})
export class Link4Component implements OnInit {
  tableVar : boolean;
  infoVar : boolean;
  f_name :String;
  l_name :String;
  time :String;
  appointment_type :String;

  
  cancelNote :boolean;
  message : String;

  constructor() {
  }

  startCancel(){
    this.tableVar = false;
    this.cancelNote = true;
  }

  viewAppts(){
    this.tableVar = true;
    this.infoVar = false;
  }

  patientInfo(){
    // make a reference to the patient information
    this.tableVar = false;
    this.infoVar = true;
    console.log("check row click");
  }

  cancelAppointment(){
    //cancel an appointment
    this.tableVar = true;
    this.cancelNote = false;
    
    console.log("Canceled");
  }

  sendMessage(){
    //method to create message.
    this.message = '';
    console.log("Sent to message");
  }

  reschedulelAppointment(){
    //this should cancel appointment and make new appointment
    console.log("Reschedule appointment");
  }
  
  ngOnInit() {}
}
