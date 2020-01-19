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

  checkin(appointment :Appointment) :Observable<Appointment> {
    return this.http.post<Appointment>(this.url+ "/appointment", appointment);
  }

}
