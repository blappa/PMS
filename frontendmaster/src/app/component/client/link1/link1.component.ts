import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService }  from '../../menu/services/appointment.service';
import { Users } from 'src/app/models/users';
import { UserService } from '../../menu/services/user.service';
import {Observable} from 'rxjs';
import { ScheduleService } from '../../menu/services/schedule.service';
import { Schedule } from 'src/app/models/schedule';

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
  app: string[] =  [];
  doctor :Users = new Users();
  schedule :Schedule = new Schedule();
  doctor_id : number;
  date : string;
  schedule_id : number;
  doctors : Users[] =  [];
  allDoctors:Observable<Users[]>;
  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];
  options : string;
  issucces : boolean;


  constructor(public router: Router, private appointmentService: AppointmentService, private userService: UserService, private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.issucces =  false;
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/assets/js/javascripts.js';
    script.async = false;
    script.defer = true;
    body.appendChild(script);

    this.allDoctors = this.userService.getDoctors();
    this.allDoctors.subscribe(
      (response) => {
        this.doctors = response;
        //console.log(this.doctors[0].f_name);
      }
    );
  }

  selectOption() {
    //console.log(this.appointment.doctor.id);
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor1(this.appointment.doctor.id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
        //console.log(this.schedules);
      }
    );
  }

checkin(){
  this.app[0] = this.appointment.visit_reason;
  this.app[1] = this.appointment.allergy;
  this.app[2] = this.appointment.medication_list;
  this.app[3] = this.appointment.appointment_type;
  this.app[4] = this.appointment.pcp;
  this.app[5] = this.appointment.doctor.id+"";
  this.app[6] = this.appointment.schedule.id+"";
  this.app[7] = sessionStorage.getItem("user_id");
  //console.log(this.app);
  this.appointmentService.checkin(this.app).subscribe( data => {
    //console.log(data);
    if(data != null){
      this.issucces =  true;
    }else{
      this.issucces =  false;
    }
  });
 }

}
