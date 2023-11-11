import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  alert!: string;
  message!: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.loginService.getCredentials()) {
      this.router.navigateByUrl('/admin');
    }
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

    this.loading = true;

    this.loginService
      .login(email, password)
      .then((data: any) => {
        this.loading = false;
        if (data.status == 'success') {
          this.router.navigateByUrl('/admin');
        } else if (data.code == 'auth/user-not-found') {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Usuário ou senha errados!',
          });
        } else if (data.code == 'auth/wrong-password"') {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Usuário ou senha errados!',
          });
        } else {
          this.alertService.setAlert({
            type: 'danger',
            message: 'Erro ao tentar logar',
          });
        }
      })
      .catch((error) => {
        this.alertService.setAlert({
          type: 'danger',
          message: 'Erro ao fazer o login',
        });
        this.loginService.setLogout();
        this.loading = false;
      });
  }
}
