import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import {Observable} from 'rxjs';
import { AppointmentService } from '../menu/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css','../menu/menu.component.css']
})

@Injectable({
  providedIn: 'root'
})


export class ClientComponent implements OnInit {

  allUserAppointments:Observable<Appointment[]>;
  user_id: string;
  appointments : Appointment[] =  [];

  constructor(public router: Router,private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.user_id = sessionStorage.getItem("user_id");
    this.allUserAppointments = this.appointmentService.getUsersAppointments(this.user_id);
    this.allUserAppointments.subscribe(
      (response) => {
        this.appointments = response;
      }
    );
  }
  
  
}
