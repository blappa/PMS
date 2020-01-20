import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { ScheduleService } from '../../menu/services/schedule.service';
import { UserService } from '../../menu/services/user.service';
import { DoctorComponent } from '../../doctor/doctor.component';
import { Schedule } from 'src/app/models/schedule';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.css','../client.component.css']
})
export class Link2Component implements OnInit {

  allDoctors:Observable<Users[]>;
  doctor : Users =  new Users();
  doctors : Users[] =  [];

  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];

  isok :boolean;

  constructor(public router: Router, private userService: UserService, private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.allDoctors = this.userService.getDoctors();
    this.allDoctors.subscribe(
      (response) => {
        this.doctors = response;
        //console.log(this.doctors[0].f_name);
      }
    );
  }

  view(){
    this.isok = true;
    //console.log(this.appointment.doctor.id);
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor1(this.doctor.id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
      }
    );
  }

}
