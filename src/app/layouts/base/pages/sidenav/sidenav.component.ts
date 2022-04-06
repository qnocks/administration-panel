import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Routing } from '../../../../core/constants/routing';

@Component({
  selector: 'psap-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
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
