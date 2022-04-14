import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './core/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang(Constants.I18N.DEFAULT_LANGUAGE_CODE);
    translateService.use(Constants.I18N.DEFAULT_LANGUAGE_CODE);
  }
}
