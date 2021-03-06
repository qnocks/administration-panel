import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/language';
import { Constants } from '../../../../core/constants/constants';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'psap-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLanguageComponent implements OnInit {
  readonly languages: Language[] = Constants.I18N.LANGUAGES;

  constructor(private translationService: TranslateService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.translationService.use(this.storageService.getValue(
      Constants.TOKEN_STORAGE.LANGUAGE_KEY) ||
      Constants.I18N.DEFAULT_LANGUAGE_CODE);
  }

  onSelectLanguage(language: string): void {
    this.storageService.setValue(Constants.TOKEN_STORAGE.LANGUAGE_KEY, language);
    this.translationService.use(language);
  }

  getCurrentLanguage(): string {
    return this.storageService.getValue(Constants.TOKEN_STORAGE.LANGUAGE_KEY) || Constants.I18N.DEFAULT_LANGUAGE_CODE;
  }
}
