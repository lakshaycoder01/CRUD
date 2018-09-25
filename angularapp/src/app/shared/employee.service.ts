import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Employee;
  readonly baseURL = 'http://localhost:3000/user';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL + '/create', emp, { headers: this.headers});
  }

  getEmployeeList() {
    return this.http.get(this.baseURL + '/read', {headers: this.headers});
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + '/update', emp, {headers: this.headers});
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + '/delete/' + _id, {headers: this.headers});
  }

  setter(employee: Employee) {
    this.employee = employee;
  }
  getter() {
  return this.employee;
}
}
