import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http :HttpClient) {}

  getUser(username :string) :Observable<String> {
    console.log(username);
    return this.http.get<String>("http://localhost:8080/hospital_username/"+username);
  }


}