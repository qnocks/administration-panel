import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function I18nLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../../../assets/i18n/', '.json');
}
