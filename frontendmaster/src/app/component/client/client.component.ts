import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css','../../app.component.css']
})

@Injectable({
  providedIn: 'root'
})


export class ClientComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }
  
  
}
