import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../../core/services/login.service';
import { LoginRequest } from '../../../../core/interfaces/login-request';

@Component({
  selector: 'psap-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const request: LoginRequest = this.loginForm.value;

      // TODO: call service to login with provided request
      console.log(request);
      this.loginService.login(request);
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
}
