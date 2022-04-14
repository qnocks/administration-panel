import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    SidenavModule,
    MatSidenavModule,
    NavbarModule,
    MatButtonModule,
    MatIconModule,
    I18nModule,
  ],
  exports: [
    ContainerComponent,
  ],
})
export class ContainerModule {
}
