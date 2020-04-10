import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  coursedata: any[];
  constructor(private adminservices: AdminservicesService) { }

  ngOnInit(): void {

    this.adminservices.geCourses().subscribe(res => {
      this.coursedata = res;
    }, err => {
      this.coursedata = err
    }
    );
  }

}
