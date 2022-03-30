import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Routing } from '../../../../core/constants/routing';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // TODO: move function to header when implementing header
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.BASE]);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onToggleSidenav() {
    // TODO: open sidenav component
  }
}
