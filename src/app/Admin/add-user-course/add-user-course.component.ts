import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user-course',
  templateUrl: './add-user-course.component.html',
  styleUrls: ['./add-user-course.component.scss']
})
export class AddUserCourseComponent implements OnInit {

  _id: any;
  userdata: any;
  courseCode: string;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router) { }
  sub: any;
  addUserCourse(courseCode: HTMLInputElement) {
    this.courseCode = courseCode.value;
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this._id = params.get('id');
      this.adminservices.addUserCourse(this._id, this.courseCode).subscribe(res => {
        this.userdata = res;
      }, err => {
        this.userdata = err
      }
      );
    });
    courseCode.value = "";
  }

  deleteUserCourse(courseCode: HTMLInputElement) {
    this.courseCode = courseCode.value;
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this._id = params.get('id');
      this.adminservices.deleteUserCourse(this._id, this.courseCode).subscribe(res => {
        this.userdata = res;
      }, err => {
        this.userdata = err
      }
      );
    });
    courseCode.value = "";
  }
  ngOnInit(): void {
    // this.sub = this._Activatedroute.paramMap.subscribe(params => {
    //   this._id = params.get('id');
    //   this.adminservices.getUserCoursesdata(this._id).subscribe(res => {
    //     this.userdata = res;
    //   }, err => {
    //     this.userdata = err
    //   }
    //   );
    // });
  }
}
