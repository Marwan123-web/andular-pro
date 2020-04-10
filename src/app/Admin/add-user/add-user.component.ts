import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  // id, name, email, password
  constructor(private adminservices: AdminservicesService) { }
  addUser(id: HTMLInputElement,name: HTMLInputElement,email: HTMLInputElement,password: HTMLInputElement) {
    this._id= id.value, this.name=name.value, this.email= email.value, this.password= password.value;
    
    this.role = 'admin';
    this.adminservices.addUser(this._id, this.name, this.email, this.password, this.role).subscribe(res => {
      console.log('Done');
    }, err => {
      console.log('Fail'+this.role);
    }
    );
  }

  ngOnInit(): void {

  }

}
