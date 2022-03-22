import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierModule, NotifierService } from 'angular-notifier';
import notificationOptions from './notification-options';

@NgModule({
  imports: [
    CommonModule,
    NotifierModule.withConfig(notificationOptions)
  ],
  providers: [
    NotifierService
  ],
  exports: [
    NotifierModule,
  ]
})
export class NotificationModule { }
