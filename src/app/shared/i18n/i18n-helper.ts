import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Constants } from '../../core/constants/constants';

@Injectable({ providedIn: 'root' })
export class I18nHelper {

  constructor(private translateService: TranslateService) {
  }

  loadTranslations(): Observable<unknown> {
    return this.translateService.get(Constants.I18N.HELPER_KEY);
  }
}
