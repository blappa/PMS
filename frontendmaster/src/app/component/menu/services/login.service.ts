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
    return this.http.get<String>("http://localhost:8080/?username="+username);
  }


}