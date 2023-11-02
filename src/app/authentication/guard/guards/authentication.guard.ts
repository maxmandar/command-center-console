import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn  } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../token/services/token.service';
import { map } from 'rxjs/operators';

export const AuthenticationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  
  return tokenService.getAccessToken().pipe(
    map((token) => {
      if (token) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};