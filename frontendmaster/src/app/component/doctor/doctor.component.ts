import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css','../menu/menu.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DoctorComponent implements OnInit {

  boolVar : boolean = true;
  f_name :String;
  l_name :String;
  time :String;
  appointment_type :String;

  instructions : String;
 
  constructor(public router: Router) {}

  ngOnInit() {
  }

  patientInfo(){
    // make a reference to the patient information
    this.boolVar = false;
    console.log("check row click");
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
