import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../viewemployee/viewemployee.component';
import { EmployeeService } from 'src/app/auth/employee.service';
import { IEmployee } from 'src/app/employee';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  action: string;
  local_data: any;
  public response = [];
  constructor(private service: EmployeeService, public dialogRef: MatDialogRef<EditemployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee) {
    console.log(employee);
    this.local_data = { ...employee };
    this.local_data.dob = new Date(employee.dob);
    console.log(this.local_data);
    this.action = this.local_data.action;
  }

  ngOnInit() {

  }
  doAction() {
    console.log("from edit employee");
    this.dialogRef.close({ event: this.action, employee: this.local_data });
    console.log(this.local_data);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
