import { ILink } from './link.interface';
import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input('data') data!: ILink;

  constructor() {}

  ngOnInit(): void {}
}
