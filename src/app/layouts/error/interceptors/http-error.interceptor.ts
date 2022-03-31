import { Injectable } from '@angular/core';
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

  constructor(private notifierService: NotifierService,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
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
          },
        }),
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
    // TODO: implement following steps in next commit
    //  1. authService.refreshToken()
    //  2. if SUCCESS then save new tokens and proceed the current request (how?)
    //  3. if refresh token has expired (FAILURE) then authService.logout()

    const refreshToken = this.tokenStorageService.getUser().refreshToken;
    // console.log(refreshToken);

    console.log('Refreshing token...');
    this.authService.refreshToken({refreshToken: refreshToken})
      .pipe(
        tap({
          error: (error) => {
            console.log('Logging out...');
            this.authService.logout().subscribe({
              next: () => {
                console.log('Redirecting to login page...');
                this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
              }
            });
          }
        })
      )
      .subscribe({
        next: (token) => {
          console.log('Setting refreshed token...');
          this.tokenStorageService.setRefreshedToken(token);
        }
      });

    // const refreshToken$ = this.authService.refreshToken({refreshToken: refreshToken});
    // const logout$ = this.authService.logout();
    // concat(refreshToken$, logout$);

    // this.authService.refreshToken({refreshToken: refreshToken})
    //   .pipe(
    //     tap({
    //       next: (token) => {
    //         console.log('authService.refreshToken() SUCCESS');
    //         this.tokenStorageService.setRefreshedToken(token);
    //       },
    //       error: (error) => {
    //         console.log('authService.refreshToken() ERROR');
    //         this.authService.logout()
    //           .pipe(
    //             tap({
    //               next: () => {
    //                 console.log('authService.login() SUCCESS');
    //                 this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
    //               }
    //             })
    //           );
    //       }
    //     })
    //   );

    // this.authService.refreshToken({refreshToken: refreshToken}).subscribe({
    //   next: (token) => {
    //     console.log('authService.refreshToken() SUCCESS');
    //     this.tokenStorageService.setRefreshedToken(token);
    //   },
    //   error: () => {
    //     console.log('authService.refreshToken() ERROR');
    //     console.log('authService.logout()');
    //     this.authService.logout().subscribe({
    //       next: () => {
    //         console.log('authService.logout() SUCCESS');
    //         this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
    //         this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
    //           this.translateService.instant('error.http.unauthorized'));
    //       },
    //       error: (error) => {
    //         console.log('authService.logout() FAILURE');
    //         console.log(error)
    //       }
    //     });
    //   }
    // });

    // this.authService.logout().subscribe({
    //   next: () => {
    //     this.router.navigate([Routing.AUTH.ABSOLUTE_LOGIN]);
    //     this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR,
    //       this.translateService.instant('error.http.unauthorized'));
    //   }
    // });
  }

  private redirectToErrorPage(statusCode: number): void {
    this.router.navigate(['error', {statusCode: statusCode}]);
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
