import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService }  from '../../menu/services/appointment.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css','../client.component.css']
})

export class Link1Component implements OnInit {

    appointment :Appointment = new Appointment();

  constructor(public router: Router, private appointmentService: AppointmentService) { }

  ngOnInit() {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/assets/js/javascripts.js';
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

checkin(){
  console.log(this.appointment);
  this.appointmentService.checkin(this.appointment).subscribe( data => {
    console.log(data);
    /*if(data != null){
      this.issucces =  true;
    }else{
      this.issucces =  false;
    }*/
  });
}

}
