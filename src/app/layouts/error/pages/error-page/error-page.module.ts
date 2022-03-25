import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLayoutComponent } from '../../error-layout.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';


@NgModule({
  declarations: [
    ErrorLayoutComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ErrorPageComponent }]),
    CommonModule
  ],
  exports: [
    ErrorLayoutComponent
  ]
})
export class ErrorPageModule {
}
