import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../shared/components/messages/messages.service';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menus: any[];
  constructor(private messageService: MessageService,
              private dashboardService : DashboardService,
              private router : Router) { this.menus = []}

  ngOnInit() {
    this.getMenus();
  }

  getMenus(){
    this.dashboardService.getMenus().subscribe(
      data => {

        if (data.error) {
          this.messageService.add({ text: data.data, type: 'warning' });
          return;
        }
        // login successful if there's a jwt token in the(message  response
        if (data.data ) {
          this.menus = data.data.menus;
          this.messageService.add({ text: data.data, type: 'Success' });
        }
      }, error => {
        this.messageService.add({ text: error, type: 'warning' });
        console.log(error);
      }
    );
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
