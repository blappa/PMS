import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../../menu/services/user.service';
import { Users } from '../../../models/users';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-link16',
  templateUrl: './link16.component.html',
  styleUrls: ['./link16.component.css', '../user.component.css']
})
export class Link16Component implements OnInit {

  user :Users = new Users();
  issucces :boolean;


  constructor(public router: Router, private userService: UserService) {

    this.issucces =  false;
   }

  ngOnInit() {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '/assets/js/javascripts.js';
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  createUser() {
    console.log(this.user);
    this.userService.createUser(this.user)
        .subscribe( data => {
          if(data != null){
            this.issucces =  true;
          }else{
            this.issucces =  false;
          }
        });
  };

  loginPage(){
    location.replace("/");
  }

}
