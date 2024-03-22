import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLogged){
    return true;
  }else{
    inject(Router).navigateByUrl("/login");
    return false;
  }
};
