import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutModule } from '../../auth/pages/auth-layout.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorLayoutRoutingModule } from './error-layout-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    ErrorLayoutRoutingModule,
    AuthLayoutModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule,
    // I18nModule,
  ],
  exports: [
    ErrorPageComponent,
  ],
})
export class ErrorLayoutModule {
}
