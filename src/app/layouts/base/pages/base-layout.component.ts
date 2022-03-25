import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-home-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
}
