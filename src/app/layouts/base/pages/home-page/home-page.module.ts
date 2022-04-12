import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
    CommonModule,
    MatButtonModule,
    // I18nModule,
  ],
  exports: [
    HomePageComponent,
  ],
})
export class HomePageModule {
}
