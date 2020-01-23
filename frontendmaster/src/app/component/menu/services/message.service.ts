import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Messages } from 'src/app/models/messages';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';
 private url = 'http://localhost:8080/portal';

 constructor(private http :HttpClient) {}

 sendMessage(data :string[]) {
  return this.http.get<Messages[]>(this.url+"/message/"+data+"/send");
}

getAllMessage(id :string) :Observable<Messages[]> {
  return this.http.get<Messages[]>(this.url+"/message/all/"+id);
}

getAllUnreadMessage(id :string) :Observable<Messages[]> {
  return this.http.get<Messages[]>(this.url+"/message/all/unread/"+id);
}

setUnreadMessage(id :string, message_id:number) :Observable<Messages[]> {
  return this.http.get<Messages[]>(this.url+"/message/setread/"+id+"/"+message_id);
}

}
