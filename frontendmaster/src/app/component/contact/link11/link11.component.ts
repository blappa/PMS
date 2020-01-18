import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link11',
  templateUrl: './link11.component.html',
  styleUrls: ['./link11.component.css','../contact.component.css']
})
export class Link11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
