import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../../menu/services/user.service';
import { ScheduleService } from '../../menu/services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link8',
  templateUrl: './link8.component.html',
  styleUrls: ['./link8.component.css','../doctor.component.css']
})
export class Link8Component implements OnInit {

  doctor_id :string;
  schedule :Schedule = new Schedule();
  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];
  date: string;
  
  constructor(private userService: UserService, private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.updateSch();
        
  }

  updateSch(){
    this.doctor_id = sessionStorage.getItem("user_id");
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor3(this.doctor_id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
        //console.log(this.schedules);
      }
    );
  }

  updateSchedule(id : number) {
    this.scheduleService.updateSchedule(id)
     .subscribe(
      (response) => {
        this.schedules = response;
        this.updateSch();
      }
    );
    console.log("Updateschedule");
  }

}
