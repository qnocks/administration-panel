import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'psap-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const request = this.loginForm.value;
      console.log(request)

      // TODO: call service to login with provided request
    }
  }

  isUsernameNotValid() {
    return !this.loginForm.controls['username'].valid;
  }

  isPasswordNotValid() {
    return !this.loginForm.controls['password'].valid;
  }

  private buildForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}
