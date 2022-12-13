import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../components/shared/alert/alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  alert!: string;
  message!: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private loginService: LoginService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  handleLogin() {
    const { email, password } = this.formGroup.value;

    if (!email || !password) {
      this.alertService.setAlert({
        type: 'warning',
        message: 'Os campos obrigatórios estão em branco',
      });
      return;
    }

    this.loginService.login(email, password);
  }
}
