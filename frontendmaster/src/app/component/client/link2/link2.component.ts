import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.css','../client.component.css']
})
export class Link2Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
