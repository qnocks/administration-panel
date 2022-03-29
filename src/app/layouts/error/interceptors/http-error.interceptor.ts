import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Constants } from '../../../core/constants/constants';
import { AuthService } from '../../auth/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Routing } from '../../../core/constants/routing';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notifierService: NotifierService,
              private authService: AuthService,
              private translateService: TranslateService,
              private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap({
          error: (error: any) => {
            if (error instanceof HttpErrorResponse) {
              this.handle(error);
            }
          }
        })
      );
  }

  private handle(error: HttpErrorResponse): void {
    switch (error.status) {
      case HttpStatusCode.BadRequest:
        this.handleBadRequestStatus(error);
        break;
      case HttpStatusCode.Unauthorized:
        this.handleUnauthorizedStatus();
        break;
      case HttpStatusCode.Forbidden:
        this.redirectToErrorPage(error.status);
        break;
      case HttpStatusCode.NotFound:
        this.redirectToErrorPage(error.status);
        break;
      case HttpStatusCode.InternalServerError:
        this.handleInternalServerError();
        break;
      default:
        this.handleUnknownError();
        break;
    }
  }

  private handleBadRequestStatus(error: HttpErrorResponse): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR, error.error.message);
  }

  private handleUnauthorizedStatus(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
        this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
          this.translateService.instant('error.http.unauthorized'));
      }
    });
  }

  private redirectToErrorPage(statusCode: number): void {
    this.router.navigate(['error', { statusCode: statusCode }]);
  }

  private handleInternalServerError(): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
      this.translateService.instant('error.http.server_error'));
  }

  private handleUnknownError(): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
      this.translateService.instant('error.http.unknown'));
  }
}
