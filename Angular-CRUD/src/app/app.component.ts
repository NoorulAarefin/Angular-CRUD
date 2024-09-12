import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { EmployeeModel } from './Models/Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-CRUD';
  empForm: FormGroup = new FormGroup({});

  Employee :  EmployeeModel = new EmployeeModel();
  EmpList : EmployeeModel[]=[];
  constructor() {
    this.empForm;
  }



  newEmpForm (){
    this.empForm = new FormGroup ({

      empId : new FormControl(this.Employee.empId),
      empName : new FormControl(this.Employee.empName),
      empEmailId : new FormControl(this.Employee.empEmailId),
      empContact : new FormControl(this.Employee.empContact),
      empAddress : new FormControl(this.Employee.empAddress),
      empPinCode : new FormControl(this.Employee.empPinCode),
      empSalary : new FormControl(this.Employee.empSalary),
      empCity : new FormControl(this.Employee.empCity)
    });
  }

  onSave (){
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.empForm.controls['empId'].setValue(parseData.length +1);
    }
  }


}
