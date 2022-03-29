import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { I18nModule } from '../../../../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    RouterModule.forChild([{path: '', component: HomePageComponent}]),
    CommonModule,
    MatButtonModule,
    I18nModule,
  ],
  exports: [
    HomePageComponent,
  ],
})
export class HomePageModule {
}
