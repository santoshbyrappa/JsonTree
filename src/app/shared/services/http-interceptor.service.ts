import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthgaurdService } from './AuthgaurdService';
import { tap } from 'rxjs/operators';
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router,
              public authgaurdService: AuthgaurdService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer' + ' ' + sessionStorage.getItem('token')
      }
    });
    this.authgaurdService.changeBufferStatus(true);
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
       
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          this.authgaurdService.changeBufferStatus(false);
          return event;
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.authgaurdService.changeBufferStatus(false);
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal
            this.router.navigate(['/auth/login']);
          }
        }
      }));
  }
}