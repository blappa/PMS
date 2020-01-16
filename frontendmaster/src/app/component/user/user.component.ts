import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css','../../app.component.css']
})
export class UserComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
