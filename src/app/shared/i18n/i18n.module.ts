import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from './i18n-loader';
import { I18nHelper } from './i18n-helper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: I18nLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    I18nHelper,
  ],
  exports: [
    TranslateModule,
  ],
})
export class I18nModule {
}
