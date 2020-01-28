import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SecureGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  status: boolean = this.loginService.isLoggedIn();

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.username === '' || this.loginService.username === null || this.loginService.username === undefined){
      alert('Login to use this feature!!');
      return false;
    }
    return true;
  }

}
