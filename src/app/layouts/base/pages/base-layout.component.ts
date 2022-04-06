import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'psap-home-layout',
  templateUrl: './base-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
}
