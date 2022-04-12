import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SpinnerModule } from './layouts/spinner/pages/spinner/spinner.module';
import { NotificationModule } from './shared/notification/notification.module';
import { AuthInterceptor } from './layouts/auth/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from './layouts/error/interceptors/http-error.interceptor';
import { AuthLayoutModule } from './layouts/auth/pages/auth-layout.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarModule } from './layouts/base/pages/navbar/navbar.module';
import { ContainerModule } from './layouts/base/pages/container/container.module';
import { I18nLoader } from './shared/i18n/i18n-loader';
import { I18nHelper } from './shared/i18n/i18n-helper';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: I18nLoader,
        deps: [HttpClient],
      },
    }),
    SpinnerModule,
    NotificationModule,
    AuthLayoutModule,
    LayoutModule,
    NavbarModule,
    ContainerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  exports: [
    TranslateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
