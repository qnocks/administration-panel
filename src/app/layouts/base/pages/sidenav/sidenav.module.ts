import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NavigationService } from '../../services/navigation.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    TranslateModule,
    // I18nModule,
  ],
  providers: [
    NavigationService,
  ],
  exports: [
    SidenavComponent,
  ],
})
export class SidenavModule {
}
