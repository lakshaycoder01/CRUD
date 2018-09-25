import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../employee'

@Component({
  selector: 'app-createupdate',
  templateUrl: './createupdate.component.html',
  styleUrls: ['./createupdate.component.css']
})
export class CreateupdateComponent implements OnInit {
  private employee:Employee;

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.employee=this.employeeService.getter()
  }
  createorupdate(){
    if(this.employee._id==undefined){
      console.log(this.employee._id)
      this.employeeService.postEmployee(this.employee).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/'])
        },
        error=>{
          console.log(error);
        }
      )
    } 
    else{
      this.employeeService.putEmployee(this.employee).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/'])
        },
        error=>{
          console.log(error);
        }
      )

    }
  }


}
