import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../shared/components/messages/messages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  model: any = {};
  constructor(public authService: AuthService, 
              public messageService: MessageService,
              private router: Router) { }

  onSubmit(authForm: NgForm) {
    if (authForm.valid) {

      this.authService.signup(authForm.value).subscribe(data => {
        // login successful if there's a jwt token in the response

        if (data.error) {
          this.messageService.add({ text: data.message, type: 'warning' });
        } else {
          this.messageService.add({ text: data.message, type: 'success' });
        }
        this.router.navigate(['/auth/login']);
        // authForm.submitted = false;
      }, error => {
        this.messageService.add({ text: error, type: 'warning' });
        console.log(error);
      }
      );
    }
  }
}
