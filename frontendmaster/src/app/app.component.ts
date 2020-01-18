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
  password :string;
  msg :string;
  ismenu :boolean = false;
  islogin :boolean = true;
  isregister :boolean = false;
  ismsg :boolean = false;

  constructor(private loginService :LoginService){}

  ngOnInit() {
  }

  loginUser(){
    this.loginService.getUser(this.username).subscribe(
      (response) => {
        console.log(typeof(response));
        if(response == this.password){
          this.ismenu  = true;
          this.islogin  = false;
          this.ismsg  = false;
        }
        if(response == null){
          this.ismenu  = false;
          this.isregister  = false;
          this.islogin  = true;
          this.ismsg  = true;
          this.msg = "Username or Password Invalid!";
        }
      },
      /*(response) => {
        
      }*/
     );
  }

  registerPage(){
    this.isregister  = true;
    this.ismsg  = false;
    this.islogin  = false;
    this.ismenu  = false;
  }

  loginPage(){
    this.isregister  = false;
    this.ismsg  = false;
    this.islogin  = true;
    this.ismenu  = false;
  }
}
