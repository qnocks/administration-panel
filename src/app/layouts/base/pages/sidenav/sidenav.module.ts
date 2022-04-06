import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { I18nModule } from '../../../../shared/i18n/i18n.module';



@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    I18nModule,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class SidenavModule { }
