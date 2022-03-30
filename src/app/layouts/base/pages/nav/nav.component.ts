import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { Routing } from '../../../../core/constants/routing';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private router: Router) {
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.BASE]);
      },
    });
  }

}
