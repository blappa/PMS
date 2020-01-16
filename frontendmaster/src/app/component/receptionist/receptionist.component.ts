import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css','../../app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ReceptionistComponent implements OnInit {

  link4 :boolean ;
  link5 :boolean ;
  link6 :boolean ;
  link :string;

  constructor(public router: Router) {}

  ngOnInit() {
  }

}
