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
  styleUrls: ['./json-editor.component.scss'],
})
export class JsonEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() json: any;
  @Input() qtItems!: number;
  index = Math.random();
  @Input() readonly = true;
  @Output() onSave = new EventEmitter();

  private container: any;
  private static editors: any = [];

  public jsonOpened = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.container = document.getElementById('jsoneditor' + this.index);
    if (this.container) {
      JsonEditorComponent.editors.push(
        new JSONEditor(this.container, { mode: 'tree' })
      );
      JsonEditorComponent.editors.map((editor: any, index: any) => {
        if (editor.container.id == 'jsoneditor' + this.index) {
          JsonEditorComponent.editors[index].set(this.json);
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
      const updatedJson = JsonEditorComponent.editors.filter(
        (editor: any, index: any) => {
          if (editor.container.id == 'jsoneditor' + id) {
            return JsonEditorComponent.editors[index].get();
          }
        }
      );
      this.onSave.emit(updatedJson[0].get());
    }
  }

  setMode(open: boolean, id: number) {
    this.jsonOpened = open;
    JsonEditorComponent.editors.map((editor: any, index: any) => {
      if (editor.container.id == 'jsoneditor' + id) {
        JsonEditorComponent.editors[index].setMode(open ? 'text' : 'tree');
      }
    });
  }
}
