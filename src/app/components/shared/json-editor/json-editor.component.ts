import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import JSONEditor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.sass'],
})
export class JsonEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() json: any;
  @Input() qtItems!: number;
  @Input() index!: number;
  @Input() readonly = true;
  @Input() id?: string;
  @Output() onSave = new EventEmitter();

  private container: any;
  private static editors: any = [];

  public jsonOpened = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.container = document.getElementById(
      this.id ? this.id : 'jsoneditor' + this.index
    );
    if (this.container) {
      JsonEditorComponent.editors.push(
        new JSONEditor(this.container, { mode: 'tree' })
      );
      JsonEditorComponent.editors.map((editor: any, index: any) => {
        if (index == this.index) {
          JsonEditorComponent.editors[this.index].set(this.json);
        }
      });
    }
  }

  ngOnDestroy(): void {
    JsonEditorComponent.editors = [];
  }

  handleSave(id: number) {
    const save = confirm('Deseja salvar os dados?');
    if (save) {
      const updatedJson = JsonEditorComponent.editors[id].get();
      this.onSave.emit(updatedJson);
    }
  }

  setMode(open: boolean, id: number) {
    this.jsonOpened = open;
    JsonEditorComponent.editors[id].setMode(open ? 'text' : 'tree');
  }
}