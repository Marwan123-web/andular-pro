import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  addUserBody: any;
  updateuserbody: any;
  deleteuserbody: any;
  addCourseBody: any;
  updateCourseBody: any;


  constructor(private httpClient: HttpClient) { }
  getuserurl:any='http://localhost:3000/user/profile'
  public getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }

  public getUserprofiledata(id): Observable<any> {
    return this.httpClient.get(`${this.getuserurl}/${id}`);
  }

  public addUser(_id, name, email, password, role): Observable<any> {
    this.addUserBody = { _id, name, email, password, role }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post('http://localhost:3000/add/user', this.addUserBody, { headers: headers });
  }

  public updateUser(_id, name, email, password, role): Observable<any> {
    this.updateuserbody = { _id, name, email, password, role }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put('http://localhost:3000/update/user', this.updateuserbody, { headers: headers });
  }

  // public deleteUser(_id): Observable<any> {
  //   this.deleteuserbody = { _id }
  //   console.log(this.deleteuserbody);
  //   this.endpoint = '/delete/user/_id'
  //   return this.httpClient.delete('http://localhost:3000/delete/user', this.endpoint);
  // }


  public getCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses');
  }

  public addCourse(courseCode, courseName, courseDepartment, creaditHours): Observable<any> {
    this.addCourseBody = { courseCode, courseName, courseDepartment, creaditHours }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post('http://localhost:3000/add/course', this.addCourseBody, { headers: headers });
  }

  public updateCourse(courseCode, courseName, courseDepartment, creaditHours): Observable<any> {
    this.updateCourseBody = { courseCode, courseName, courseDepartment, creaditHours }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put('http://localhost:3000/update/course', this.updateCourseBody, { headers: headers });
  }


}
