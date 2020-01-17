import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link4',
  templateUrl: './link4.component.html',
  styleUrls: ['./link4.component.css','../receptionist.component.css']
})
export class Link4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   test :boolean;

   createMsg(){
     this.test = true;
   }

   sendMsg(){
     alert("Message Sent");
     this.test = false;

   }

   appts :boolean;

   viewAppts(){
     this.appts = true;
   }

   detail :boolean;
   viewDetail(){
     this.appts = false;
     this.detail = true;
   }

   closeDetail(){
     this.detail = false;
     this.appts = true;
   }



  // isShow = false;
 
  // sndMsg() {
  //   this.isShow = !this.isShow;
  // }

}
