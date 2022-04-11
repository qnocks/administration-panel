import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { I18nModule } from '../../../../shared/i18n/i18n.module';
import { NavigationService } from '../../services/navigation.service';
import { SelectLanguageModule } from '../select-language/select-language.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    I18nModule,
    SelectLanguageModule,
  ],
  providers: [
    NavigationService,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule {
}
