import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';

import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
// import {Observable} from 'rxjs/Observable'


declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  selectedEmployee = new Employee();

  public employees: any = [];



  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
    this.RefreshEmployeeList();

  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: ""
    }

  }



  submit(form: NgForm) {

    if (form.value._id == "") {
      console.log(this.selectedEmployee);
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.RefreshEmployeeList();
        M.toast({ html: 'Saved successfuly', class: 'rounded' });
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.RefreshEmployeeList();
        M.toast({ html: 'Update successfuly', class: 'rounded' });
      });

    }

  }

  RefreshEmployeeList() {
    this.employeeService.getEmployeeList()
      .subscribe(data => this.employees = data);


  }


  onEdit(em: Employee) {
    this.selectedEmployee = em; //pencil iocn eke click krama  e data tika form ekt wetenawa//


  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
       this.employeeService.deleteEmployee(_id).subscribe(()=>{
        this.RefreshEmployeeList();          
        this.resetForm(form);
        M.toast({ html: 'Delete successfuly', classes: 'rounded' });
                 
       });

         

          

    }
  }


}
