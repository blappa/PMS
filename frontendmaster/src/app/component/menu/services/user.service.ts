import { Injectable } from '@angular/core';
import { User } from '../../../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http :HttpClient) {}

  addUser(user :User) :Observable<User> {
    return this.http.post<User>("http://localhost:8080/PokeApp/addPokemon.do", user, {headers: this.headers});
  }

}
