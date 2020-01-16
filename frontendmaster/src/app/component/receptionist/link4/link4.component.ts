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

}
