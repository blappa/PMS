import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css','../../app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DoctorComponent implements OnInit {

 
  constructor(public router: Router) {}

  ngOnInit() {
  }

}
