import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-json-page-view',
  templateUrl: './json-page-view.component.html',
  styleUrls: ['./json-page-view.component.scss'],
})
export class JsonPageViewComponent implements OnInit, OnChanges {
  @Input() title!: string;
  @Input() readonly = true;
  @Input() json = [];
  active = 0;
  loading = false;

  @Output() onSave = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = false;
  }

  onPrev() {
    if (this.active != 0) this.active--;
  }

  onNext() {
    if (this.active < this.json.length - 1) this.active++;
  }

  handleSave(json: any) {
    this.onSave.emit(json);
  }
}
