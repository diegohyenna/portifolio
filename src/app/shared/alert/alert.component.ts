import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAlert } from './alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alert?: IAlert;
  timer!: any;

  constructor(private store: Store<{ app: any }>) {}
  ngOnInit(): void {
    this.store.select('app').subscribe((res) => {
      this.alert = res.alert;

      this.timer = setTimeout(() => {
        this.alert = { type: '', message: '' };
      }, 5000);
    });
  }
}
