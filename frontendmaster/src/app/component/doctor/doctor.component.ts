import { Component, OnInit, Input, Directive } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { Schedule } from 'src/app/models/schedule';
import { Messages } from 'src/app/models/messages';
import { MessageService } from '../menu/services/message.service';
import { AppointmentService } from '../menu/services/appointment.service';
import { UserService } from '../menu/services/user.service';
import { ScheduleService } from '../menu/services/schedule.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css','../menu/menu.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DoctorComponent implements OnInit {
  appointment :Appointment = new Appointment();
  app: string[] =  [];
  doctor :Users = new Users();
  schedule :Schedule = new Schedule();
  doctor_id : string;
  date : string;
  schedule_id : number;
  doctors : Users[] =  [];
  allDoctors:Observable<Users[]>;
  allSchedules:Observable<Schedule[]>;
  schedules : Schedule[] =  [];

  client_info : boolean = true;
  appointments : boolean = true;
  f_name :String;
  l_name :String;
  time :String;
  appointment_type :String;

  instructions : String;

  num_msg :number;
  message_f_name :string;
  message_l_name :string;
  message_message :string;

  user_id :string;

  data: string[] =  [];

  allMessages :Observable<Messages[]>;

  userss :Users = new Users();
  allReceptionists:Observable<Users[]>;
  messages : Messages[] =  [];
  users : Users[] =  [];

  allUserAppointments:Observable<Appointment[]>;
  message : Messages =  new Messages();
  appmnts : Appointment[] =  [];
  cancelNote :boolean;
  cancelReason:string;
  rescheduleNote :boolean;

  constructor( private messageService: MessageService, private appointmentService: AppointmentService, private userService: UserService, private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.allReceptionists = this.userService.getUsers();
    this.allReceptionists.subscribe(
      (response) => {
        this.users = response;
      }
    );
    this.dashboard();
  }

  dashboard(){
    this.doctor_id = sessionStorage.getItem("user_id");
    this.allUserAppointments = this.appointmentService.getAvaillableAppointment_ByDoctor2(this.doctor_id);
    this.allUserAppointments.subscribe(
      (response) => {
        console.log("oo" + this.appmnts);
        this.appmnts = response;
      }
    );
  }

  startCancel(appointment : Appointment){
    this.cancelNote = true;
    this.rescheduleNote = false;
    this.appointment = appointment;
  }

  startReschedulelAppointment(appointment :Appointment){
    this.allSchedules = this.scheduleService.getAllScheduleByDoctor1(appointment.doctor.id);
    this.allSchedules.subscribe(
      (response) => {
        this.schedules = response;
        //console.log(this.schedules);
      }
    );
    this.cancelNote = false;
    this.rescheduleNote = true;
  }

  patientInfo(appointment : Appointment){
    // make a reference to the patient information
    this.client_info = false;
    this.appointment = appointment;
    console.log("client name" + this.appointment.client.f_name);
  }

  showAppointments(){
    // make a reference to the patient information
    this.appointments = false;
    this.allUserAppointments = this.appointmentService.getAvaillableAppointment_ByDoctor(this.doctor.id.toString(), this.date);
    this.allUserAppointments.subscribe(
      (response) => {
        this.appmnts = response;
      }
    );
    console.log("show list of appointments");
  }
  

  cancelAppointment(){
    console.log("cancel an appointment");
    this.cancelNote = false;
    this.rescheduleNote = false;
    this.appointmentService.cancelAppointment1(this.appointment.id + "", this.cancelReason)
     .subscribe(
      (response) => {
        this.appmnts = response;
        this.dashboard();
      }
    );
    console.log("Canceled");
  }

  sendToReceptionist(userss : Users){
    this.instructions = '';
    this.user_id = sessionStorage.getItem("user_id");
    this.data[0] = this.message.message;
    this.data[1] = this.user_id;
    this.data[2] = userss.id+"";
    this.data[3] = 'unread';
    this.allMessages = this.messageService.sendMessage(this.data);
    this.allMessages.subscribe(
      (response) => {
        console.log(response);
        this.messages = response;
      }
    );
    console.log("Sent to receptionist");
  }

  reschedulelAppointment(){
    //sheffulai has a component to view the schedule, so we can call the component here, and make changes
    //into appointment
    //thanks Nicole @Bertrick
    this.appointmentService.rescheduleAppointment(this.appointment.id.toString(),this.date)
     .subscribe(
      (response) => {
        this.appmnts = response;
      }
    );
    console.log("Reschedule appointment");
  }

}
