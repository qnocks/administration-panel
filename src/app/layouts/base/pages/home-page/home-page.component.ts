import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'psap-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

  constructor(private router: Router) {
  }

  redirectToTransactions() {
    this.router.navigate(['/transactions']);
  }
}
