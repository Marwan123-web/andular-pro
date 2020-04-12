import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
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
  coursesDepartmentbody: any;
  userProfileBody: any;
  userRolebody: any;
  deleteCoursebody: any;
  userCoursesBody: any;
  addUserCourseBody: any;
  addUserCourseId: any;
  deleteUserCourseBody: { courseCode: any; };
  deleteUserCourseId: any;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }
  public getUsersByRole(role): Observable<any> {
    this.userRolebody = role;
    return this.httpClient.get(`http://localhost:3000/users/${this.userRolebody}`);
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

  public deleteUser(_id): Observable<any> {
    this.deleteuserbody = _id;
    return this.httpClient.delete(`http://localhost:3000/delete/user/${this.deleteuserbody}`);
  }

  public getUserprofiledata(id): Observable<any> {
    this.userProfileBody = id;
    return this.httpClient.get(`http://localhost:3000/user/${this.userProfileBody}/profile`);
  }

  public getUserCoursesdata(id): Observable<any> {
    this.userCoursesBody = id;
    return this.httpClient.get(`http://localhost:3000/user/${this.userCoursesBody}/courses`);
  }

  public addUserCourse(id, courseCode): Observable<any> {
    this.addUserCourseBody = { courseCode };
    this.addUserCourseId = id;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/user/course/${this.addUserCourseId}`, this.addUserCourseBody, { headers: headers });
  }

  public deleteUserCourse(id, courseCode): Observable<any> {
    this.deleteUserCourseBody = courseCode;
    this.deleteUserCourseId = id;
    return this.httpClient.delete(`http://localhost:3000/delete/user/course/${this.deleteUserCourseId}/${this.deleteUserCourseBody}`);
  }
  // ---------------------------------------------


  public getCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses');
  }

  public getDepartmentCourses(courseDepartment): Observable<any> {
    this.coursesDepartmentbody = courseDepartment;
    return this.httpClient.get(`http://localhost:3000/courses/${this.coursesDepartmentbody}`);
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

  public deleteCourse(courseCode): Observable<any> {
    this.deleteCoursebody = courseCode;
    return this.httpClient.delete(`http://localhost:3000/delete/course/${this.deleteCoursebody}`);
  }


}
