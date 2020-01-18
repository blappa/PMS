import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { LoginService } from './component/menu/services/login.service';

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

  username :string;
  ismenu :boolean = false;
  islogin :boolean = true;
  isregister :boolean = false;

  constructor(private loginService :LoginService){}

  ngOnInit() {
  }

  menu(){
    if(this.loginService.getUser(this.username))
    this.ismenu  = true;
    this.islogin  = false;
  }

  register(){
    this.isregister  = true;
    this.ismenu  = false;
    this.islogin  = false;
  }
  
}
