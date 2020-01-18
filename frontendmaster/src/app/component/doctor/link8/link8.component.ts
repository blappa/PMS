import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link8',
  templateUrl: './link8.component.html',
  styleUrls: ['./link8.component.css','../doctor.component.css']
})
export class Link8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateSchedule() {
    console.log("Updateschedule");
  }

}
