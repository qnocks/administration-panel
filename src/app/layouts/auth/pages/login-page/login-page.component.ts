import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { Routing } from '../../../../core/constants/routing';
import { NotifierService } from 'angular-notifier';
import { Constants } from '../../../../core/constants/constants';

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
    private tokenStorage: TokenStorageService,
    private notifierService: NotifierService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.verifyAuthentication();
    this.buildForm();
    this.initReturnUrl();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const request: LoginRequest = this.loginForm.value;

      // TODO: delete logging to console when debug login component would be done
      console.log(request);
      this.authService.login(request).subscribe({
        next: (token) => {
          this.tokenStorage.setToken(token);
          this.router.navigate([this.redirectUrl]);
          // TODO: add translation support
          this.notifierService.notify(Constants.NOTIFIER_KEY.successKey, 'Login successfully');
        },
        error: (error) => {
          // TODO: add translation support
          console.log(error.message);
          this.notifierService.notify(Constants.NOTIFIER_KEY.errorKey, error.error.message);
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
    if (this.tokenStorage.isLoggedIn()) {
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
      this.redirectUrl = params[Routing.PARAMS.loginRedirectUrlName] || this.defaultRedirectUrl;
    });
  }
}
