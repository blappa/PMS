import { Injectable } from '@angular/core';
import { User } from '../../../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';

  constructor(private http :HttpClient) {}

 
  public getUsers() {
    return this.http.get<User[]>(this.url+ "/hospital_users");
  }

  public deleteUser(idu :number) {
    return this.http.delete(this.url + "/hospital_user/"+ idu);
  }

  public createUser(user :User) {
    return this.http.post<User>(this.url+ "/hospital_user", user);
  }

}
