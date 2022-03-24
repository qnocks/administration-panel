import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // TODO: implement this page in next PRs

  constructor(private authService: AuthService,
              private router: Router) {
  }

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
