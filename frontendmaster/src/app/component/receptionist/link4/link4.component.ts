import { Component, OnInit, Input, Directive } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { AppointmentService } from '../../menu/services/appointment.service';
import { UserService } from '../../menu/services/user.service';
import { ScheduleService } from '../../menu/services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { Appointment } from 'src/app/models/appointment';
import { Messages } from 'src/app/models/messages';
import { MessageService } from '../../menu/services/message.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link4',
  templateUrl: './link4.component.html',
  styleUrls: ['./link4.component.css','../receptionist.component.css']
})
export class Link4Component implements OnInit {
  tableVar : boolean;
  infoVar : boolean;
  f_name :string;
  l_name :string;
  time :string;
  appointment_type :string;
  cancelReason:string;
  doctor :Users = new Users();
  client :Users = new Users();
  appointment :Appointment = new Appointment();
  doctors : Users[] =  [];
  allDoctors:Observable<Users[]>;
  allSchedules:Observable<Schedule[]>;
  schedule :Schedule= new Schedule();
  schedules : Schedule[] =  [];
  cancelNote :boolean;
  rescheduleNote :boolean;
  date: string;

  num_msg :number;
  message_f_name :string;
  message_l_name :string;
  message_message :string;

  user_id :string;

  data: string[] =  [];

  allMessages :Observable<Messages[]>;

  receptionist :Users = new Users();
  allReceptionists:Observable<Users[]>;
  messages : Messages[] =  [];
  receptionists : Users[] =  [];

  allUserAppointments:Observable<Appointment[]>;
  appointments : Appointment[] =  [];
  message : Messages =  new Messages();

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
  }

  selectOption(doctor: Users) {
    //console.log(this.appointment.doctor.id);
    this.doctor = doctor;
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor1(doctor.id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
        //console.log(this.schedules);
      }
    );

  }

  selectOption1(schedule: Schedule) {
    this.schedule =  schedule;
    console.log(this.schedule);
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
    console.log(this.schedule);
    this.allUserAppointments = this.appointmentService.getAppointment_ByDoctorByDay(this.doctor.id+"", this.schedule.dates);
    this.allUserAppointments.subscribe(
      (response) => {
        this.appointments = response;
      }
    );
  }

  dashboard(appointment: Appointment){
    this.allUserAppointments = this.appointmentService.getAppointment_ByDoctorByDay(appointment.doctor.id+"", this.appointment.schedule.dates);
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
    this.appointment = appointment;
    console.log("check row click");
  }

  cancelAppointment(){
    //cancel an appointment
    this.tableVar = true;
    this.cancelNote = false;
    this.appointmentService.cancelAppointment1(this.appointment.id+"", this.cancelReason)
     .subscribe(
      (response) => {
        //this.appointments = response;
        this.dashboard(this.appointment);
      }
    );
  }


  sendMessage(){
    this.user_id = sessionStorage.getItem("user_id");
    this.data[0] = this.message.message;
    this.data[1] = this.user_id;
    this.data[2] = this.receptionist.id+"";
    this.data[3] = 'unread';
    this.allMessages = this.messageService.sendMessage(this.data);
    this.allMessages.subscribe(
      (response) => {
        this.messages = response;
        console.log("Sent to message");
      }
    );
  }

  reschedulelAppointment(){
    //this should cancel appointment and make new appointment
    this.appointmentService.rescheduleAppointment(this.appointment.id.toString(),this.date)
     .subscribe(
      (response) => {
        this.appointments = response;
      }
    );
    //console.log("Reschedule appointment");
    this.rescheduleNote = false;
  }
 
  
}
