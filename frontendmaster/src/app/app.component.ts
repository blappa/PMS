import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'frontendmaster';

  ismenu :boolean = false;
  islogin :boolean = true;

  constructor(){}

  ngOnInit() {
  }

  menu(){
    this.ismenu  = true;
    this.islogin  = false;
  }
  
}
