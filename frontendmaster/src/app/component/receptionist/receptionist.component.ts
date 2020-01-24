import { Component, OnInit, Input, Directive } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { Appointment } from 'src/app/models/appointment';
import { Messages } from 'src/app/models/messages';
import { MessageService } from '../menu/services/message.service';
import { AppointmentService } from '../menu/services/appointment.service';
import { UserService } from '../menu/services/user.service';
import { ScheduleService } from '../menu/services/schedule.service';
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

  f_name :String;
  l_name :String;

  time :string;
  appointment_type :string;
  cancelReason:string;
  doctor :Users = new Users();
  client :Users = new Users();
  appointment :Appointment = new Appointment();
  doctors : Users[] =  [];
  allDoctors:Observable<Users[]>;
  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];
  rescheduleNote :boolean;
  date: string;

  message : Messages =  new Messages();
  num_msg :number;
  message_f_name :string;
  message_l_name :string;
  message_message :string;

  user_id :string;

  data: string[] =  [];

  allMessages :Observable<Messages[]>;

  receptionist :Users = new Users();
  userss :Users = new Users();
  allUsers:Observable<Users[]>;
  usersss:Observable<Users>;
  receptionists : Users[] =  [];
  allReceptionists:Observable<Users[]>;
  messages : Messages[] =  [];
  users : Users[] =  [];

  allUserAppointments:Observable<Appointment[]>;
  appointments : Appointment[] =  [];
  apmnts : Appointment[] =  [];

  constructor( private messageService: MessageService, private appointmentService: AppointmentService, private userService: UserService, private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.allDoctors = this.userService.getDoctors();
    this.allDoctors.subscribe(
      (response) => {
        this.doctors = response;
        //console.log(this.doctors[0].f_name);
      }
    );
    this.allUserAppointments = this.appointmentService.getAvaillableAppointment_ByDoctor1();
    this.allUserAppointments.subscribe(
      (response) => {
        console.log(response);
        this.appointments = response;
      }
    );

    this.allUserAppointments = this.appointmentService.getAvaillableAppointment_ByDoctor1();
    this.allUserAppointments.subscribe(
      (response) => {
        this.apmnts = response;
        this.apmnts.forEach(element => {
          //console.log("----"+element);
          this.count(element.schedule.dates+" "+element.schedule.time, element.id+"");
        });
      }
    );
  }

  getUsers() {
    //console.log(this.appointment.doctor.id);
    this.allUsers = this.userService.getUsers();
    this.allUsers.subscribe(
      (response) => {
        this.users= response;
        //console.log(this.schedules);
      }
    );
  }

  selectOption(user) {
    //console.log(this.appointment.doctor.id);
    this.usersss = this.userService.getUser(user.id);
    this.usersss.subscribe(
      (response) => {
        this.userss= response;
        //console.log(this.schedules);
      }
    );
  }

  startCancel(){
    this.tableVar = false;
    this.cancelNote = true;
    this.rescheduleNote = false;
  }

  startReschedulelAppointment(appointment :Appointment){
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor1(appointment.doctor.id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
        //console.log(this.schedules);
      }
    );
    this.tableVar = false;
    this.cancelNote = false;
    this.rescheduleNote = true;
  }

  viewAppts(){
    this.tableVar = true;
    this.infoVar = false;
    this.allUserAppointments = this.appointmentService.getAvaillableAppointment_ByDoctor(this.doctor.id.toString(), this.date);
    this.allUserAppointments.subscribe(
      (response) => {
        this.appointments = response;
      }
    );
  }

  patientInfo(id :number, appointment: Appointment){
    // make a reference to the patient information
    /*this.tableVar = false;
    this.infoVar = true;
    this.userService.getUser(id)
     .subscribe(
      (response) => {
        this.client = response;
        this.appointment = appointment;
      }
    );*/
    this.tableVar = false;
    this.infoVar = true;
    this.appointment = appointment;
    this.getUsers();
    console.log("check row click");
  }

  cancelAppointment(){
    //cancel an appointment
    this.tableVar = true;
    this.cancelNote = false;
    this.appointmentService.cancelAppointment(this.appointment.id+"", this.cancelReason, this.date)
     .subscribe(
      (response) => {
        this.appointments = response;
      }
    );
  }


  sendMsg(){
    this.user_id = sessionStorage.getItem("user_id");
    this.data[0] = this.message.message;
    this.data[1] = this.user_id;
    this.data[2] = this.userss.id+"";
    this.data[3] = 'unread';
    this.allMessages = this.messageService.sendMessage(this.data);
    this.allMessages.subscribe(
      (response) => {
        this.messages = response;
        console.log("Sent to message");
      }
    );
  }

  checkout(appointment : Appointment){
    this.appointment = appointment;   
     this.appointmentService.completeAppointment(this.appointment.id+"")
     .subscribe(
      (response) => {
        this.appointments = response;
      }
    );  
  }

  reschedulelAppointment(){
    //this should cancel appointment and make new appointment
    this.appointmentService.rescheduleAppointment(this.appointment.id+"",this.date)
     .subscribe(
      (response) => {
        this.appointments = response;
      }
    );
    //console.log("Reschedule appointment");
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
