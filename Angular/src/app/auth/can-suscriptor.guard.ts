import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanSuscriptorGuard implements CanActivate {
  constructor(private authSvc:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user)=>user&&this.authSvc.isSuscriptor(user)),
      tap(canEdit=>{
        if(!canEdit){
          window.alert('Access denied.');
        }
      })
    );
  }
  
}
