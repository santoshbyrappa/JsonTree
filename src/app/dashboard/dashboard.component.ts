import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../shared/components/messages/messages.service';
import { DashboardService } from './dashboard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: any[];
  emp: any;
  constructor(private messageService: MessageService,
              private dashboardService : DashboardService,
              private router : Router,
              private modalService : NgbModal) { 
                this.employees = [];
                this.emp={
                  "header":"Create Employee",
                  "data" : {}
                }
  }

  ngOnInit() {
    this.employeeProcess('get',null,null);
  }

  employeeProcess(method:string,id:string,data:object){
    var result;
    switch(method) {
      case "create":
      result = this.dashboardService.post(data);
      break;
      case "edit":
      result = this.dashboardService.update(id,data);
      break;
      case "delete":
      result = this.dashboardService.delete(id);
      break;
      default:
      result = this.dashboardService.get();
    }
    this.processData(result,method);    ``
  }

  processData(data: any,method:string){
    console.log(data);
    data.subscribe(
        data => {
        if (data.error) {
          this.messageService.add({ text: data.message, type: 'warning' });
          this.modalService.dismissAll('employeeModal');
          return;
        }
        if(method == "post" || method == "delete" || method == "edit" || method == "create") {
          this.messageService.add({ text: data.message, type: 'Success' });
          this.employeeProcess('get',null,null);
        }else if(method == 'get'){
          // login successful if there's a jwt token in the(message  response
          if (data.data) {
            this.employees = data.data.employees;
            this.messageService.add({ text: "Employee dataList", type: 'Success' });
            this.modalService.dismissAll('employeeModal');
            

          }
        }
      }, error => {
        this.messageService.add({ text: error, type: 'warning' });
        this.modalService.dismissAll('employeeModal');
        console.log(error);
      }
    );
  }

  openModal(id: any,modal){
    this.modalService.open(modal);
  }

  closeModal(modal){
    this.modalService.dismissAll(modal);
  }

  editEmployeeDetails(employee,modal){
    this.emp.data = employee;
    this.modalService.open(modal);
  }


}
