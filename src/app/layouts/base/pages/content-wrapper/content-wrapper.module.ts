import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ContentWrapperComponent,
  ],
  imports: [
    CommonModule,
    SidenavModule,
    MatSidenavModule,
    NavbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ContentWrapperComponent,
  ],
})
export class ContentWrapperModule { }
