import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { LoginService } from './component/menu/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  response :string;

  constructor(private loginService :LoginService){
    this.password = '';
  }

  ngOnInit() {
  }

  loginUser(){
    this.loginService.getUser(this.username).subscribe(
      (resp) => {
        this.response = JSON.parse(resp.toString());
        console.log(this.response);
        if(this.response['0'].toString() === this.password.toString()){
          this.ismenu  = true;
          this.islogin  = false;
          this.ismsg  = false;
          sessionStorage.setItem("name", this.response['1']);
          sessionStorage.setItem("role", this.response['2']);
        }
        if(this.response['0'].toString() == '0'){
          this.ismenu  = false;
          this.isregister  = false;
          this.islogin  = true;
          this.ismsg  = true;
          this.msg = "Username or Password Invalid!";
        }
      }
     );
     /*this.loginService.getUser(this.username).subscribe( data => {
      console.log(data);
    });*/
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
