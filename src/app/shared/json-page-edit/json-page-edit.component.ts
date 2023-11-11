import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-json-page-edit',
  templateUrl: './json-page-edit.component.html',
  styleUrls: ['./json-page-edit.component.scss'],
})
export class JsonPageEditComponent implements OnInit {
  @Input() title!: string;
  @Output() onSave = new EventEmitter();
  readonly = true;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  handleSave(json: any) {
    this.onSave.emit(json);
  }

  onBack() {
    this.location.back();
  }
}
