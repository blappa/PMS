import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link5',
  templateUrl: './link5.component.html',
  styleUrls: ['./link5.component.css','../receptionist.component.css']
})
export class Link5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  drSchedule :boolean;

  viewSchedule(){
    this.drSchedule = true;
  }

}
