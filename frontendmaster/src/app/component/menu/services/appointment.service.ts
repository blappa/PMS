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

  private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';
  //private url = 'http://localhost:8080/portal';

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

  cancelAppointment(id :string, reason :string, date :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_cancel/"+id+"/"+reason+"/"+date);
  }

  
  rescheduleAppointment(id :string, date :string):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointment_reschedule/"+id+"/"+date);
  }

  getAvaillableAppointment_ByDoctor1():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url+ "/appointments");
  }

}
