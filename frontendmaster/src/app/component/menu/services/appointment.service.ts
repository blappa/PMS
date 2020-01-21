import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   //private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';
  private url = 'http://localhost:8080/portal';

  constructor(private http :HttpClient) {}

  public checkin(appointment :string[]){
    return this.http.get<Appointment>(this.url+ "/appointment/"+appointment+"/add");
  }

  public getUsersAppointments(user_id :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_user/"+user_id);
  }
  
  public getAvaillableAppointment_ByDoctor(id :string, date :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_doctor_date/"+id+"/"+date);
  }//

  public getAvaillableAppointment_ByDoctor4(id :string, date :string, time : string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_doctor_date_time/"+id+"/"+date+"/"+time);
  }//

  cancelAppointment(id :string, reason :string, date :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_cancel/"+id+"/"+reason+"/"+date);
  }

  //nicole
  cancelAppointment1(id :string, reason :string,):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_cancel1/"+id+"/"+reason);
  }

  
  rescheduleAppointment(id :string, date :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_reschedule/"+id+"/"+date);
  }

  getAvaillableAppointment_ByDoctor1():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointments");
  }

  //nicole
  getAvaillableAppointment_ByDoctor2(id : string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointmentsByDoctor/"+id);
  }

}
