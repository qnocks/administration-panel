import { Injectable } from '@angular/core';
import { Routing } from '../../../core/constants/routing';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  redirectToHome(): void {
    this.router.navigate([Routing.HOME.BASE]);
  }

  redirectToTransactions(): void {
    this.router.navigate([Routing.TRANSACTION.BASE]);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.BASE]);
      },
    });
  }
}
