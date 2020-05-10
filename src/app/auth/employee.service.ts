import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private registerUrl = "http://localhost:8080/employees";
  private addemployeeUrl = "http://localhost:8080/employees/addemployee";
  private getallemployeeUrl = "http://localhost:8080/employees/getallemployee";
  private updateemployeeUrl = "http://localhost:8080/employees/updateemployee/";
  private deleteemployeeUrl = "http://localhost:8080/employees/deleteemployee/";
  
  constructor(private httpClient: HttpClient) { }

  register(userData) {
    return this.httpClient.post<any>(this.registerUrl, userData);
  }

  addEmployee(userData) {
    return this.httpClient.post<any>(this.addemployeeUrl, userData);
  }

  updateEmployee(eid: number, userData) {
    return this.httpClient.post<any>(this.updateemployeeUrl + eid, userData);
  }

  deleteEmployee(eid) {
    return this.httpClient.delete<any>(this.deleteemployeeUrl +  eid);
  }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.getallemployeeUrl);
  }



}
