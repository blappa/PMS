import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
            './menu.component.css',
            '../../app.component.css'
         ]
})

@Injectable({
  providedIn: 'root'
})

export class MenuComponent implements OnInit {
  
  name :string;
  role :string;
  link1 :boolean;
  link2 :boolean;
  link3 :boolean;
  link4 :boolean;
  link5 :boolean;
  link6 :boolean;
  link7 :boolean;
  link8 :boolean;
  link9 :boolean;
  link10 :boolean;
  link11 :boolean;
  link12 :boolean;
  link13 :boolean;
  link14 :boolean;
  link15 :boolean;
  link16 :boolean;
  showdasbord :boolean;
  
  constructor(public router: Router) {
    this.showdasbord = true;
    this.name = sessionStorage.getItem("name");
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit() {
  }

  logout(){
    //this.router.navigate(['/']);
    this.router.navigate(['logout']);
    location.reload();
  }
  
  clink1(){
    this.checkLink('link1');
    this.router.navigate(['link1']);
  }
  clink2(){
    this.checkLink('link2');
    this.router.navigate(['link2']);
  }
  clink3(){
    this.checkLink('link3');
    this.router.navigate(['link3']);
  }
  clink4(){
    this.checkLink('link4');
    this.router.navigate(['link4']);
  }
  clink5(){
    this.checkLink('link5');
    this.router.navigate(['link5']);
  }
  clink6(){
    this.showdasbord = false;
    this.checkLink('link6');
    this.router.navigate(['link6']);
  }
  clink7(){
    this.checkLink('link7');
    this.router.navigate(['link7']);
  }
  clink8(){
    this.checkLink('link8');
    this.router.navigate(['link8']);
  }
  clink9(){
    this.checkLink('link9');
    this.router.navigate(['link9']);
  }
  clink10(){
    this.checkLink('link10');
    this.router.navigate(['link10']);
  }
  clink11(){
    this.checkLink('link11');
    this.router.navigate(['link11']);
  }
  clink12(){
    this.checkLink('link12');
    this.router.navigate(['link12']);
  }
  clink13(){
    this.checkLink('link13');
    this.router.navigate(['link13']);
  }
  clink14(){
    this.checkLink('link14');
    this.router.navigate(['link14']);
  }
  clink15(){
    this.checkLink('link15');
    this.router.navigate(['link15']);
  }
  clink16(){
    this.checkLink('link16');
    this.router.navigate(['link16']);
  }

  showDashboard(){
    this.name = sessionStorage.getItem("name");
    this.role = sessionStorage.getItem("role");
    this.checkLink('showdasbord');
  }

  checkLink(link :string){
    if(link == "link1"){
      this.link1 = true;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link2"){
      this.link1 = false;
      this.link2 = true;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link3"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = true;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link4"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = true;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link5"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = true;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link6"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = true;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link7"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = true;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link8"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = true;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link9"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = true;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link10"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 =false;
      this.link10 = true;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link11"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = true;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link12"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = true;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link13"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = true;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link14"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = true;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link15"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = true;
      this.link16 = false;
      this.showdasbord = false;
    }
    if(link == "link16"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = true;
      this.showdasbord = false;
    }
    if(link == "showdasbord"){
      this.link1 = false;
      this.link2 = false;
      this.link3 = false;
      this.link4 = false;
      this.link5 = false;
      this.link6 = false;
      this.link7 = false;
      this.link8 = false;
      this.link9 = false;
      this.link10 = false;
      this.link11 = false;
      this.link12 = false;
      this.link13 = false;
      this.link14 = false;
      this.link15 = false;
      this.link16 = false;
      this.showdasbord = true;
    }
  }

}
