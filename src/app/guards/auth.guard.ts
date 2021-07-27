import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    //alert('guard ' + this.authService.isAuthenticated())
    if (this.authService.isAuthenticated()) {
      console.log(this.authService.isAuthenticated());
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
