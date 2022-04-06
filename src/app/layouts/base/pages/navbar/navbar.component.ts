import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // TODO: move the logic to separate file
  redirectToHome(): void {
    this.router.navigate([Routing.HOME.BASE]);
  }

  // TODO: move the logic to separate file
  redirectToTransactions(): void {
    this.router.navigate([Routing.TRANSACTION.BASE]);
  }

  // TODO: move the logic to separate file
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.BASE]);
      },
    });
  }
}
