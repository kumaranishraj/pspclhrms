import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/auth/employee.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatTable } from '@angular/material';
import { EditemployeeComponent } from '../editemployee/editemployee.component';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  constructor(private service: EmployeeService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['empId', 'name', 'email', 'mobile', 'dob', 'address', 'city', 'state', 'postalCode', 'action'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  public employees = [];
  ELEMENT_DATA: Employee[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
    this.service.getAllEmployee().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response) {
    this.ELEMENT_DATA = response;
    console.log(this.ELEMENT_DATA);
    this.dataSource = new MatTableDataSource<Employee>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditemployeeComponent, {
      width: '450px',
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.event == 'Update') {
        this.updateRowData(result.employee);
      }
      else if(result.event == 'Delete'){
        this.deleteRowData(result.employee);
      }
    });
  }

  updateRowData(row_obj) {
    let eid = row_obj.eid;
    this.service.updateEmployee(eid, row_obj).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
   
  }
  deleteRowData(row_obj):void{
    let eid = row_obj.eid;
    console.log(eid);
    
    this.service.deleteEmployee(eid).subscribe(data =>{
      console.log(data);
    }    );
  }

}

export interface Employee {
  empId: number;
  name: string;
  email: string;
  mobile: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  action: string;

}
const ELEMENT_DATA: Employee[] = [
  // {empId:1000,name:'Anish Kumar',email:'anish@gmail.com',mobile:'9713131787',dob:'05/05/2020',address:'Izzath Nagar',city:'Hyderabad',state:'Telangana',postalCode:'500084'}
];