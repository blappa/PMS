import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../../app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AboutComponent implements OnInit {
  
  constructor(public router: Router) {}

  ngOnInit() {
  }
  

  

}
