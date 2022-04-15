import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Constants } from '../../../core/constants/constants';
import { AuthService } from '../../auth/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { TokenStorageService } from '../../auth/services/token-storage.service';
import { Routing } from '../../../core/constants/routing';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  translateService: TranslateService;

  constructor(private notifierService: NotifierService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private injector: Injector) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.injectTransactionService();

    if (request.headers.get(Constants.INTERCEPTOR_SKIP_HEADER)) {
      request = request.clone({
        headers: request.headers.delete(Constants.INTERCEPTOR_SKIP_HEADER),
      });
      return next.handle(request);
    }

    return next.handle(request)
      .pipe(
        tap({
          error: (error: any) => {
            if (error instanceof HttpErrorResponse) {
              this.handle(error);
            }
          },
        }),
      );
  }

  private handle(error: HttpErrorResponse): void {
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        this.handleError(error);
        break;
      case HttpStatusCode.Unauthorized:
        this.handleUnauthorized();
        break;
      case HttpStatusCode.Forbidden:
        this.redirectToErrorPage(error.status);
        break;
      case HttpStatusCode.NotFound:
        this.redirectToErrorPage(error.status);
        break;
      case HttpStatusCode.Conflict:
        this.handleError(error);
        break;
      default:
        this.handleUnknownError();
        break;
    }
  }

  private handleError(error: HttpErrorResponse): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR, error.error.message);
  }

  private handleUnauthorized(): void {
    const refreshToken = this.tokenStorageService.getUser().refreshToken;
    this.authService.refreshToken({ refreshToken: refreshToken }).subscribe({
      next: () => {
        // TODO: i18n
        this.notifierService.notify(Constants.NOTIFIER_KEY.SUCCESS, 'Session has updated. Please refresh the page');
      },
      error: () => {
        this.authService.logout().subscribe({
          next: () => {
            this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
            this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
              this.translateService.instant('error.http.unauthorized'));
          },
        });
      },
    });
  }

  private redirectToErrorPage(statusCode: number): void {
    this.router.navigate([Constants.NOTIFIER_KEY.ERROR], { queryParams: { statusCode: statusCode } });
  }

  private handleUnknownError(): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
      this.translateService.instant('error.http.unknown'));
  }

  private injectTransactionService(): void {
    try {
      this.translateService = this.injector.get(TranslateService);
    } catch {
      console.log('TranslateService is not yet available');
    }
  }
}
