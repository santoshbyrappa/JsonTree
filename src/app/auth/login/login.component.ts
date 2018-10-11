import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from '../../shared/components/messages/messages.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(public authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {

  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    this.authService.login(authForm.value).subscribe(
      data => {

        if (data.error) {
          this.messageService.add({ text: data.data, type: 'warning' });
          authForm.reset();
          return;
        }
        // login successful if there's a jwt token in the(message  response
        if (data.data && data.data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(data.data);
          this.messageService.add({ text: data.data.name + ' ' + data.message, type: 'Success' });
          sessionStorage.setItem('token', data.data.token);
          this.router.navigate(['/dashboard']);
        }
      }, error => {
        this.messageService.add({ text: error, type: 'warning' });
        console.log(error);
      }
    );
  }
}
