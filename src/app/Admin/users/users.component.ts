import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersdata: any[];
  constructor(private adminservices: AdminservicesService) { }

  ngOnInit(): void {
    this.adminservices.getUsers().subscribe(res => {
      this.usersdata = res;
    }, err => {
      this.usersdata = err
    }
    );
  }

}
