import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css','../menu/menu.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ReceptionistComponent implements OnInit {

  tableVar : boolean = true;
  infoVar : boolean;
  cancelNote :boolean;
  message : String;

  f_name :String;
  l_name :String;

  constructor(public router: Router) {}

  ngOnInit() {
  }

  startCancel(){
    this.tableVar = false;
    this.cancelNote = true;
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

}
