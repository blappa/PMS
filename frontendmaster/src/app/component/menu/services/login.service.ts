import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/portal';

  constructor(private http :HttpClient) {}

  getUser(username :string) :Observable<String> {
    return this.http.get<String>(this.url+"/hospital_username/"+username, {responseType: 'text' as 'json' });
  }

}