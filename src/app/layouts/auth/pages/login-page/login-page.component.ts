import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'psap-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  redirectUrl: string;

  constructor(
    private loginService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.setRedirectUrl();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const request: LoginRequest = this.loginForm.value;

      // TODO: delete logging to console when debug login component would be done
      console.log(request);
      this.loginService.login(request).subscribe(token => {
        this.tokenStorage.setToken(token);
        this.router.navigate([this.redirectUrl], {relativeTo: this.route});
      });
    }
  }

  isUsernameNotValid(): boolean {
    return !this.loginForm.controls['username'].valid;
  }

  isPasswordNotValid(): boolean {
    return !this.loginForm.controls['password'].valid;
  }

  private buildForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  private setRedirectUrl(): void {
    this.route.queryParams.subscribe(params => {
      this.redirectUrl = params['returnUrl'] || '';
    });
  }
}
