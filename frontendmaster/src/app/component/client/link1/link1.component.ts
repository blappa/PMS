import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css','../client.component.css']
})





export class Link1Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

checkin(){
  
}

}
