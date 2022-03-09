import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-auth-layout',
  template: `
    <router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
}
