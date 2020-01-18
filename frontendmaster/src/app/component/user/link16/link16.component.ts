import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link16',
  templateUrl: './link16.component.html',
  styleUrls: ['./link16.component.css', '../user.component.css']
})
export class Link16Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/assets/js/javascripts.js';
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  saveUser(){
    console.log("ssssssssssssssssssssss");
  }

}
