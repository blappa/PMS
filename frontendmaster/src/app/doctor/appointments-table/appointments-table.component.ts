import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.css']
})
export class AppointmentsTableComponent implements OnInit {

  f_name :String;
  l_name :String;
  time :String;
  appointment_type :String;

  constructor() { }

  ngOnInit() {
  }

  patientInfo(){
    // make a reference to the patient information
  }

}
