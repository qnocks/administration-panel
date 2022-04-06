import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'psap-home-layout',
  templateUrl: './base-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  constructor(private translateService: TranslateService) {
  }
}
