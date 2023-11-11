import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLogin } from 'src/app/redux/actions/login.action';
import { ILogin } from 'src/app/redux/interfaces/login.interface';
import { V1ApiService } from 'src/app/services/api-v1.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends V1ApiService {
  constructor(
    private router: Router,
    private store: Store<{ app: any }>,
    private alertService: AlertService,
    public override firestore: Firestore
  ) {
    super(firestore);
  }

  override login(email: string, password: string) {
    return super.login(email, password);
  }

  getEmail() {
    let login = localStorage.getItem('login') || '';
    let email = login ? JSON.parse(login)?.user?.email : '';
    return email;
  }

  getCredentials() {
    let login = localStorage.getItem('login') || '';
    login = login ? JSON.parse(login) : '';
    return login;
  }

  setLogin(data: ILogin) {
    localStorage.setItem('login', JSON.stringify({ ...data }));
    this.store.dispatch(setLogin({ payload: { ...data } }));
  }

  setLogout() {
    localStorage.removeItem('login');
    this.alertService.setAlert({
      type: 'success',
      message: 'Deslogado com sucesso!',
    });
    this.router.navigateByUrl('/login');
  }
}
