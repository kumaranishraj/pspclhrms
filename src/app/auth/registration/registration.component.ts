import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   name : new FormControl('Anish'),
  //   date : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   cnfPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('500016')
  //   })
  // });
  datasaved = false;
  massage: string;
  get name(){
    return this.registrationForm.get('name');
  }
  get dob(){
    return this.registrationForm.get('dob');
  } get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get cnfPassword(){
    return this.registrationForm.get('cnfPassword');
  }
  // get city(){
  //   return this.registrationForm.get('address.city');
  // } 
  // get state(){
  //   return this.registrationForm.get('address.state');
  // } 
  // get postalCode(){
  //   return this.registrationForm.get('address.postalCode');
  // } 
  constructor(private fb : FormBuilder, private service : EmployeeService) { }
  registrationForm = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3)]],
    dob : ['', Validators.required],
    email : ['', Validators.required],
    password : ['',[Validators.required, Validators.minLength(8)]],
    cnfPassword : ['', Validators.required],
    // address : this.fb.group({
    //   city : ['',Validators.required],
    //   state : ['',Validators.required],
    //   postalCode : ['',Validators.required]
    // })
  },{validators : passwordValidator});

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.registrationForm.value);
    this.service.register(this.registrationForm.value)
    .subscribe(
     response=>console.log("Sucess",response),
      error=>console.log("Error",error),
      ()=>{
        this.datasaved = true;
        this.massage = "Employee Added Sucessfully !";
       this.registrationForm.reset();
      }
    );
  }
}
