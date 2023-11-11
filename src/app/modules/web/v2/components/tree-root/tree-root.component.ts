import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-root',
  templateUrl: './tree-root.component.html',
  styleUrls: ['./tree-root.component.scss'],
})
export class TreeRootComponent implements OnInit {
  @Input('open') open = false;
  @Input('summaryTitle') summaryTitle!: string;

  constructor() {}

  ngOnInit() {}
}
