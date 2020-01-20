import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { ScheduleService } from '../../menu/services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link9',
  templateUrl: './link9.component.html',
  styleUrls: ['./link9.component.css','../doctor.component.css']
})
export class Link9Component implements OnInit {

  doctor_id :string;
  date: string;
  schedule :Schedule = new Schedule();
  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];
  
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.scheduleService.updateSchedule(this.schedule.id)
    .subscribe(
     (response) => {
       this.schedules = response;
     }
   );
  }

  createSchedule(){
    this.doctor_id = sessionStorage.getItem("user_id");
    this.scheduleService.createSchedule(this.doctor_id, this.date)
     .subscribe(
      (response) => {
        this.schedules = response;
      }
    );
  }

}
