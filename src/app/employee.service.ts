import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = [] as any;
  url: string = 'http://localhost:3000/employees';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(public http: HttpClient) {}

  listAllEmployees(): Observable<any[]> {
    console.log(this.employees);
    return this.http.get<Employee[]>(`${this.url}`);
  }
  getEmployeeById(id: any): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`, this.httpOptions);
  }

  createEmployee(emp: Employee): Observable<any> {
    console.log(emp);
    let URL = `${this.url}`;
    return this.http.post<any>(URL, emp, this.httpOptions);
  }

  updateEmployee(id: number, employee: any): Observable<Employee> {
    console.log(employee);
    let URL = `${this.url}`;
    return this.http.put<Employee>(
      `${this.url}/${id}`,
      employee,
      this.httpOptions
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    console.log(id + ' from deleteEmployee()');
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}