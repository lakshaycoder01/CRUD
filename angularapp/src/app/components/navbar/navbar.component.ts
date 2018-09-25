import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../employee'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private employeeservice:EmployeeService) { }

  ngOnInit() {
  }
  newUser(event:any){
    event.preventDefault();
    this.employeeservice.setter(new Employee());
    this.router.navigate(['/createUpdate'])
  }

}
