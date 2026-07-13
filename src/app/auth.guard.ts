import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuarioCadastrado = localStorage.getItem('usuarioLogado') === 'true';

  if (usuarioCadastrado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};