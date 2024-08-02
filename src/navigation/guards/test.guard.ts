import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const testGuard: CanActivateFn = (route, state) => {
  let roles = route.data['roles'] as Array<string>;
  const router = inject(Router);

  if (roles.includes(localStorage.getItem('userRole') || '')) {
    return true;
  }

  // @ts-ignore
  return router.navigate(['./'])
};
