import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-base-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
}
