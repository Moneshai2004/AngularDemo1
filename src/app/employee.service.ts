
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Employee } from './Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [] as any;
  //url: string = '/assets/emp.json';
  apiurl: string = 'http://localhost:8182/employee';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(public http: HttpClient) {}

  listAllEmployees(): Observable<any[]> {
    console.log(this.employees);
    return this.http.get<Employee[]>(`${this.apiurl}/listall`);
  }
  getEmployeeById(id: any): Observable<Employee> {
    return this.http.get<Employee>(
      `${this.apiurl}/getEmpbyId/${id}`,
      this.httpOptions
    );
  }

  createEmployee(emp: Employee): Observable<any> {
    console.log(emp);
    let APIURL = `${this.apiurl}`;
    return this.http.post<any>(
      `${this.apiurl}/addEmployee`,
      emp,
      this.httpOptions
    );
  }

  updateEmployee(id: number, employee: any): Observable<Employee> {
    console.log(employee);
    let APIURL = `${this.apiurl}`;
    return this.http.put<Employee>(
      `${this.apiurl}/updateEmployee`,
      employee,
      this.httpOptions
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    console.log(id + ' from deleteEmployee()');
    return this.http.delete<any>(`${this.apiurl}/deletebyid/${id}`);
  }
}
