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
  apmnts : Appointment[] =  [];

  constructor(public router: Router,private appointmentService: AppointmentService) {}

  ngOnInit() {

    this.user_id = sessionStorage.getItem("user_id");
    this.allUserAppointments = this.appointmentService.getUsersAppointments(this.user_id);
    this.allUserAppointments.subscribe(
      (response) => {
        this.appointments = response;
      }
    );

    this.user_id = sessionStorage.getItem("user_id");
    this.allUserAppointments = this.appointmentService.getUsersAppointments(this.user_id);
    this.allUserAppointments.subscribe(
      (response) => {
        this.apmnts = response;
        this.apmnts.forEach(element => {
          //console.log("----"+element);
          this.count(element.schedule.dates+" "+element.schedule.time, element.id+"")
        });
      }
    );
    
  }

  count(date: string, tagId: string){
    // Set the date we're counting down to
	  var countDownDate = new Date(date).getTime();
	  // Update the count down every 1 second
	  var x = setInterval(function() {
	  // Get today's date and time
	  var now = new Date().getTime();
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // If the count down is finished, write some text
	  if (days >= 0 && days <= 14) {
	    // Display the result in the element with id="demo"
	    //clearInterval(x);
	     document.getElementById(tagId).innerHTML = 
			  days + "d " 
			  + hours + "h "
		    + minutes + "m " 
		    + seconds + "s ";
	  }else if (days > 14) {
		    clearInterval(x);
		    document.getElementById(tagId).innerHTML = "UP COMING";
	  }else if (days == 0) {
      clearInterval(x);
      document.getElementById(tagId).innerHTML = "TODAY";
    }else if (days <= 0) {
    clearInterval(x);
    document.getElementById(tagId).innerHTML = "DONE";
    }
	 }, 1000);
  }

}
