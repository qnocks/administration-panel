import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-home-layout',
  template: `
    <psap-navbar></psap-navbar>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
}
