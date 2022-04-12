import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SelectLanguageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    SelectLanguageComponent,
  ],
})
export class SelectLanguageModule {
}
