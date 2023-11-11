import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slider } from 'src/app/pages/admin/route-animation';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [slider],
})
export class AdminComponent implements OnInit, AfterContentInit {
  user?: { name: string };

  constructor(
    private loginService: LoginService,
    private contexts: ChildrenOutletContexts,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getUserName();
  }

  ngAfterContentInit(): void {
    this.alertService.setAlert({ type: '', message: '' });
  }

  getUserName() {
    let email = this.loginService.getEmail();
    this.user = { name: email };
  }

  handleExit() {
    this.loginService.setLogout();
  }

  //animacao de rotas
  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot;
  }
}
