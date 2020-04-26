import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(data){
    if(data.email=="admin" && data.password=="admin"){
      this.router.navigate(['pspcl/dashboard']);
      console.log("true");
    }else if(data.email=="hr" && data.password=="hr"){
      this.router.navigate(['hr/dashboard']);
      console.log("ture");
    }else{
      console.log("false")
    }
    console.log(data.email);
  }

}
