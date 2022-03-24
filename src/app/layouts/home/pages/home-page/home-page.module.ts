import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
