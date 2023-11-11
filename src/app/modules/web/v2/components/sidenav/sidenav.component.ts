import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'v2-app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class V2SidenavComponent implements OnInit {
  @Input() showLeft = true;

  constructor() {}

  ngOnInit(): void {}
}
