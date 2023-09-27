import { Component, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css'],
})
export class EmpUpdateComponent {
  @Input()
  employees: any = {
    id: 0,
    ename: '',
    location: '',
  };

  constructor(
    private eservice: EmployeeService,
    public router: Router,
    private aroute: ActivatedRoute
  ) {}
  public id: number = this.aroute.snapshot.params['id'];
  ngOnInit(): void {
    this.eservice.getEmployeeById(this.id).subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmp() {
    this.eservice
      .updateEmployee(this.employees.id, this.employees)
      .subscribe((data) => this.router.navigate(['/viewemp']));
  }
}
