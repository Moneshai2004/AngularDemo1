import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css'],
})
export class EmpCreateComponent {
  employees: Employee = {
    id: 0,
    ename: '',
    location: '',
  };

  constructor(private eservice: EmployeeService, public router: Router) {}
  addEmp() {
    console.log(this.employees);
    this.eservice
      .createEmployee(this.employees)
      .subscribe((data) => this.router.navigate(['/viewemp']));
  }
}
