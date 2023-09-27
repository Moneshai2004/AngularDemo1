import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-enamelist',
  templateUrl: './enamelist.component.html',
  styleUrls: ['./enamelist.component.css']
})
export class EnamelistComponent {
  employees: any = [];
  url:string = 'assets/emp.json'
  constructor(public http:HttpClient){}

  listAllEmployees():Observable<any> {
    return this.employees = this.http.get(`${this.url}`)
  }
}