import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IProject } from '../projects/projects.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit {
  @Input('items') items: any;
  private itemsBackup: any;

  @Input('categories') categories: any;
  @Input('technologies') technologies: any;

  public projectActiveItem = 0;

  @ViewChild('selectCategories') selectCategories: any;
  @ViewChild('selectTechnologies') selectTechnologies: any;

  itemActiveModal: any;

  // private touchXStart = 0;
  // private touchYStart = 0;

  constructor() {}

  ngOnInit() {
    let timer = setInterval(() => {
      if (this.items) {
        clearInterval(timer);
        this.itemsBackup = this.items;
      }
    }, 300);
  }

  onChangeCategory(event: any): void {
    const category = event.target.value;
    this.items = this.itemsBackup;

    if (category !== null && category !== 'description') {
      //volta ao original
      this.selectTechnologies.nativeElement.value = 'description';

      this.items = this.itemsBackup.filter((project: IProject) =>
        project.category.includes(category)
      );
      this.projectActiveItem = 0;
    }
  }

  onChangeTechnology(event: any): void {
    const technology = event.target.value;
    this.items = this.itemsBackup;

    if (technology !== null && technology !== 'description') {
      //volta ao original
      this.selectCategories.nativeElement.value = 'description';
      this.items = this.itemsBackup.filter((project: any) =>
        project.body.technologies.includes(technology)
      );
      this.projectActiveItem = 0;
    }
  }

  onLeft(index: number) {
    index--;
    const itensCarouselLength = this.items.length;
    if (index < 0) index = itensCarouselLength - 1;
    this.projectActiveItem = index;
  }

  onRight(index: number) {
    index = index + 1;
    const itensCarouselLength = this.items.length;
    if (index >= itensCarouselLength) index = 0;
    this.projectActiveItem = index;
  }

  // touchStart(evt: any): void {
  //   this.touchXStart = evt.touches[0].clientX;
  //   this.touchYStart = evt.touches[0].clientY;
  // }

  // touchMove(index: number, evt: any) {
  //   this.leftRightTouchMove(index, evt);
  // }

  // leftRightTouchMove(index: number, evt: any) {
  //   if (!this.touchXStart && !this.touchYStart) return;

  //   let xUp = evt.touches[0].clientX;
  //   let yUp = evt.touches[0].clientY;

  //   let xDiff = this.touchXStart - xUp;
  //   let yDiff = this.touchYStart - yUp;

  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //     if (xDiff > 0) {
  //       this.onRight(index);
  //     } else {
  //       this.onLeft(index);
  //     }
  //     this.touchXStart = this.touchYStart = 0;
  //   }
  // }

  // moveItOnDot(index: number) {
  //   const containerMobile = document.querySelector('.container-slide-mobile');

  //   containerMobile?.scrollTo({ left: document.body.clientWidth * index + 1 });

  //   this.projectActiveItem = index;
  // }
}
