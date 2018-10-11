import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()

export class AuthgaurdService implements CanActivate {

	    constructor(private router: Router) {
	}

	Api_Url = environment.api_url;

	private showBuffer = new BehaviorSubject<boolean>(false);
	bufferStatus = this.showBuffer.asObservable();

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('token')) {
	            // logged in so return true
			// this.router.navigate([state.url]);
			if (state.url.includes("/auth/login")) {
				this.router.navigate(['/dashboard']);
			}
            return true;
        } else if (!(state.url.includes("/auth/login"))) {
			// not logged in so redirect to login page with the return url
			this.router.navigate(['/auth/login']);
			return false;
        } else if (state.url.includes("/auth/login")) {
			return true;
		}
    };

	changeBufferStatus(item: boolean) {
		this.showBuffer.next(item);
	}

}

