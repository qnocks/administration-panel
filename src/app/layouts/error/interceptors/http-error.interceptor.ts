import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Constants } from '../../../core/constants/constants';
import { AuthService } from '../../auth/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

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
            console.log('ERROR Intercept');
            console.log(error);
            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case HttpStatusCode.BadRequest:
                  this.handleBadRequestStatus(error);
                  break;
                case HttpStatusCode.Unauthorized:
                  this.handleUnauthorizedStatus();
                  break;
                case HttpStatusCode.Forbidden:
                  this.handleForbiddenStatus(error);
                  break;
                case HttpStatusCode.NotFound:
                  this.handleNotFoundStatus(error);
                  break
                default:
                  this.handleUnknownError();
                  break;
              }
            }
          }
        })
      );
  }

  private handleBadRequestStatus(error: HttpErrorResponse): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.error, error.error.message);
  }

  private handleUnauthorizedStatus(): void {
    this.authService.logout().subscribe({
      next: () => {
        // TODO: string to constants
        this.router.navigate(['auth/login']);
        this.notifierService.notify(Constants.NOTIFIER_KEY.error,
          this.translateService.instant('exceptions.common.unauthorized'));
      }
    });
  }

  private handleForbiddenStatus(error: HttpErrorResponse): void {
    this.router.navigate(['error', { statusCode: error.status }]);
  }

  private handleNotFoundStatus(error: HttpErrorResponse): void {
    this.router.navigate(['error', { statusCode: error.status }]);
  }

  private handleUnknownError(): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.error, this.translateService.instant('exceptions.common.unknown'));
  }
}