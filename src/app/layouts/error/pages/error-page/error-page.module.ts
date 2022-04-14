import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ErrorPageComponent }]),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    I18nModule,
  ],
  exports: [
    ErrorPageComponent,
  ],
})
export class ErrorPageModule {
}
