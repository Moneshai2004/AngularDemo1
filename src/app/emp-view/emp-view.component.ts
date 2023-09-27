import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent {
    arr = [1, 2, 3, 4, 5];
    employees: any = [];
  selectedId: any;
  router: any;
    constructor(private eservice: EmployeeService) {}
  
    ngOnInit():void {
      this.employees = this.eservice.listAllEmployees().subscribe((data) =>{
        this.employees = data;
      });
      console.log(this.employees);
    }
    onDelete(emp: any) {
      this.selectedId = emp.id;
      if (window.confirm('Are you sure , you want to delete?')) {
        this.eservice
          .deleteEmployee(this.selectedId)
          .subscribe((data: {}) => this.router.navigate(['/viewemp'], data));
      }
    }
}
