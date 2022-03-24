import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule } from '../../../../shared/i18n/i18n.module';
import { TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    I18nModule
  ],
  providers: [
    TranslatePipe
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule {
}
