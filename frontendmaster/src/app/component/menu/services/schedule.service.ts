import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

    private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';
    //private url = 'http://localhost:8080/portal';

    constructor(private http :HttpClient) {}
  
    getAllScheduleByDoctor(id :number, date :string) :Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/schedule_doctor_date/"+id+"/"+date);
    }

    getAllScheduleByDoctor1(id :number) :Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/schedule_doctor/"+id);
    }

    getAllScheduleByDoctor2(id :string) :Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/schedule_doctor/"+id);
    }

    updateSchedule(id :number):Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/update_schedule_doctor/"+id);
    }

    getAllScheduleByDoctor3(id :string) :Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/schedule_doctor/"+id+"/all");
    }

    createSchedule(id :string, date :string, time :string) :Observable<Schedule[]> {
      return this.http.get<Schedule[]>(this.url+"/create_schedule_doctor/"+id+"/"+date+"/"+time);
    }
}
