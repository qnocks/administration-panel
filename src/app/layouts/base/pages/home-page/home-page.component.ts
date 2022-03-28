import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Routing } from '../../../../core/constants/routing';

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

  // TODO: Delete it when debug is done
  test(): void {
    this.authService.test().subscribe(res => console.log(res));
  }

  // TODO: move function to header when implementing header
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
