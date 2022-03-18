import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierModule, NotifierService } from 'angular-notifier';

@NgModule({
  imports: [
    CommonModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 20
        },
        vertical: {
          position: 'bottom',
          distance: 20,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 3000,
        onMouseover: 'pauseAutoHide'
      }
    })
  ],
  providers: [
    NotifierService
  ],
  exports: [
    NotifierModule,
  ]
})
export class NotificationModule { }
