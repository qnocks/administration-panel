import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-error-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorLayoutComponent {
}
