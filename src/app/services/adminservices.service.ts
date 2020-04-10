import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  body: any;
  constructor(private httpClient: HttpClient) { }

  public geCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses');
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }

  public addUser(_id, name, email, password, role): Observable<any> {
    this.body = { _id, name, email, password, role }
    console.log(JSON.stringify(this.body));
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post('http://localhost:3000/add/user', this.body, { headers: headers });
  }
}
