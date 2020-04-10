import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  homebtn: boolean = true;
  coursebtn: boolean = false;
  userbtn: boolean = false;
  profilebtn: boolean = false;
  activebtn(name) {
    if (name == 'course') {
      this.coursebtn = true;
      this.homebtn = false;
      this.userbtn = false;
      this.profilebtn = false;
    }
    else if (name == 'home') {
      this.coursebtn = false;
      this.homebtn = true;
      this.userbtn = false;
      this.profilebtn = false;
    }
    else if (name == 'user') {
      this.coursebtn = false;
      this.homebtn = false;
      this.userbtn = true;
      this.profilebtn = false;
    }
    else if (name == 'profile') {
      this.coursebtn = false;
      this.homebtn = false;
      this.userbtn = false;
      this.profilebtn = true;
    }
  }
  constructor() {
  }

  ngOnInit(): void {

  }



}
