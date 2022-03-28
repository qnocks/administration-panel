import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routing } from '../../../../core/constants/routing';
import { NotifierService } from 'angular-notifier';
import { Constants } from '../../../../core/constants/constants';
import { TranslateService } from '@ngx-translate/core';
import { ErrorResponse } from '../../../../core/models/error-response';

@Component({
  selector: 'psap-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  redirectUrl: string;
  private readonly defaultRedirectUrl: string = '';

  constructor(
    private authService: AuthService,
    private notifierService: NotifierService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.verifyAuthentication();
    this.buildForm();
    this.initReturnUrl();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.onSuccessLogin();
        },
        error: (error) => {
          this.onFailureLogin(error.error);
        }
      });
    }
  }

  isUsernameNotValid(): boolean {
    return !this.loginForm.controls['username'].valid;
  }

  isPasswordNotValid(): boolean {
    return !this.loginForm.controls['password'].valid;
  }

  private verifyAuthentication(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  private initReturnUrl(): void {
    this.route.queryParams.subscribe(params => {
      this.redirectUrl = params[Routing.PARAMS.LOGIN_REDIRECT_URL_NAME] || this.defaultRedirectUrl;
    });
  }

  private onSuccessLogin(): void {
    this.router.navigate([this.redirectUrl]);
    this.notifierService.notify(Constants.NOTIFIER_KEY.SUCCESS, this.translate.instant('notification.login.success'));
  }

  private onFailureLogin(error: ErrorResponse): void {
    this.notifierService.notify(Constants.NOTIFIER_KEY.ERROR, error.message);
  }
}
