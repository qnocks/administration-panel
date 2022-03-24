import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
    constructor(private authService: AuthService,
              private router: Router) {
  }

  // TODO: move function to header when implementing header
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['auth/login']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
