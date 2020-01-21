import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { MessageService } from '../../menu/services/message.service';
import { Messages } from 'src/app/models/messages';
import { Users } from 'src/app/models/users';
import { UserService } from '../../menu/services/user.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link6',
  templateUrl: './link6.component.html',
  styleUrls: ['./link6.component.css','../receptionist.component.css']
})
export class Link6Component implements OnInit {

  num_msg :number;
  message_f_name :string;
  message_l_name :string;
  message_message :string;

  user_id :string;

  data: string[] =  [];

  allMessages :Observable<Messages[]>;
  message : Messages =  new Messages();

  users :Users = new Users();
  allReceptionists:Observable<Users[]>;
  messages : Messages[] =  [];
  receptionists : Users[] =  [];

  constructor(public router: Router, private messageService: MessageService, private userService: UserService) {}

  ngOnInit() {

    this.user_id = sessionStorage.getItem("user_id");
    console.log(this.user_id);
    this.allMessages = this.messageService.getAllMessage(this.user_id);
    this.allMessages.subscribe(
      (response) => {
        this.messages = response;
        //console.log(this.messages);
        if(this.messages.length != 0){
          this.message_message = this.messages[0].message;
        }
        this.message_message = '';
      }
    );

    this.allReceptionists = this.userService.getDoctors();
    this.allReceptionists.subscribe(
      (response) => {
        this.receptionists = response;
        this.message_f_name = this.receptionists[0].f_name;
        this.message_l_name = this.receptionists[0].l_name;
      }
    );

    this.getUnread();

  }


  send(receptionist : Users){
    this.user_id = sessionStorage.getItem("user_id");
    this.data[0] = this.message.message;
    this.data[1] = this.user_id;
    this.data[2] = receptionist.id+"";
    this.data[3] = 'unread';
    this.allMessages = this.messageService.sendMessage(this.data);
    this.allMessages.subscribe(
      (response) => {
        console.log(response);
        this.messages = response;
      }
    );
  }

  getUnread(){
    this.user_id = sessionStorage.getItem("user_id");
    this.allMessages = this.messageService.getAllUnreadMessage(this.user_id);
    this.allMessages.subscribe(
      (response) => {
        this.num_msg = response.length;
      }
    );
  }

  setRead(message_id :number){
    this.user_id = sessionStorage.getItem("user_id");
    this.message.id = message_id;
    this.allMessages = this.messageService.setUnreadMessage(this.user_id, this.message.id);
    this.allMessages.subscribe(
      (response) => {
        this.num_msg = response.length;
      }
    );
  }

}
