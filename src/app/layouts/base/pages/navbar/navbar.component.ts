import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { Routing } from '../../../../core/constants/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.HandsetPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private router: Router) {
  }

  redirectToHome(): void {
    this.router.navigate([Routing.HOME.BASE]);
  }

  redirectToTransactions(): void {
    // TODO: redirecting to transactions page when implementing transactions component
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
