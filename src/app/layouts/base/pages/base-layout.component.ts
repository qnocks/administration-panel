import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-home-layout',
  template: `
    <psap-nav></psap-nav>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
}
