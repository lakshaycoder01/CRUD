import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private employees:Employee[];
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.refreshEmployeeList();
  }
    refreshEmployeeList() {
      this.employeeService.getEmployeeList().subscribe(
        data=>{
          console.log(data);
          this.employees=data['msg']
        },
        error=>{
          console.log(error);
        }
      )
    }
    doupdate(employee){
      this.employeeService.setter(employee);
      this.router.navigate(['/createUpdate']);
    }
    dodelete(employee){
      this.employeeService.deleteEmployee(employee._id).subscribe(
        data=>{
          this.employees.splice(this.employees.indexOf(employee),1)
        },
        error=>{

        }
      )

      
    }

   
  

  

}