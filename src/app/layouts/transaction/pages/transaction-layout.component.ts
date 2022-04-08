import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-transaction-layout',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionLayoutComponent {
}
