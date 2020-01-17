import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../../app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ContactComponent implements OnInit {


  constructor(public router: Router) {}

  ngOnInit() {
  }
  
 
}
