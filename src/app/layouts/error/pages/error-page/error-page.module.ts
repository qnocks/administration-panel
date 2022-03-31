import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLayoutComponent } from '../../error-layout.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    ErrorLayoutComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: ErrorPageComponent}]),
    CommonModule,
    I18nModule,
  ],
  exports: [
    ErrorLayoutComponent,
  ],
})
export class ErrorPageModule {
}
