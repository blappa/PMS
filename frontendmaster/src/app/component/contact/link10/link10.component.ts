import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link10',
  templateUrl: './link10.component.html',
  styleUrls: ['./link10.component.css','../contact.component.css']
})
export class Link10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
