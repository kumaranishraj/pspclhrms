import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/auth/employee.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  datasaved = false;
  massage: string;
  get name() {
    return this.addemployeeForm.get('name');
  }
  get dob() {
    return this.addemployeeForm.get('dob');
  }
  get email() {
    return this.addemployeeForm.get('email');
  }
  get mobile() {
    return this.addemployeeForm.get('mobile');
  }
  get address() {
    return this.addemployeeForm.get('address');
  }
  get city() {
    return this.addemployeeForm.get('city');
  }
  get state() {
    return this.addemployeeForm.get('state');
  }
  get postalCode() {
    return this.addemployeeForm.get('postalCode');
  }
  constructor(private fb: FormBuilder, private service: EmployeeService) { }
  addemployeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
   
    email: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    dob: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.minLength(6)]]

  });

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.addemployeeForm.value);
    this.service.addEmployee(this.addemployeeForm.value)
    .subscribe(
     response=>console.log("Sucess",response),
     // error=>console.log("Error",error),
      ()=>{
        this.datasaved = true;
        this.massage = "Employee Added Sucessfully !";
       this.addemployeeForm.reset();
      }
    );
  }
}
