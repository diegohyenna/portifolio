import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

type IconColor = 'Default' | 'Red' | 'Green' | 'Purple' | 'Yellow';
export type DetailPage = {
  url?: string;
  link?: {
    href: string;
    target: string;
  };
  title: string;
  activeClass?: string;
};

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss'],
})
export class TreeItemComponent implements OnInit, AfterViewInit {
  @Input('iconColor') iconColor: IconColor = 'Default';
  @Input('summaryTitle') summaryTitle!: string;
  @Input('link') link!: string;
  @Input('detailsPages') detailsPages!: DetailPage[];

  @ViewChild('detailsElement') detailsElement?: ElementRef;

  open = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observeDetailsChanges();
  }

  private observeDetailsChanges() {
    const detailsElement = this.detailsElement?.nativeElement;

    // Crie um Observable para observar mudanças no estado do elemento <details>.
    const detailsChanges = new Observable<boolean>((observer) => {
      observer.next(detailsElement.open);

      const mutationObserver = new MutationObserver(() => {
        observer.next(detailsElement.open);
      });
      //para parar a propagaçaõ do observable
      mutationObserver.observe(detailsElement, { attributes: true });
      return () => mutationObserver.disconnect();
    });

    detailsChanges.subscribe((isOpen) => {
      this.onOpenClose(isOpen);
    });
  }

  onOpenClose(open: any) {
    this.open = open;
  }
}
