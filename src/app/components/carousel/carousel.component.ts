import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input('items') items: any;
  private itemsBackup: any;

  @Input('minimumScreenMobile') minimumScreenMobile: any;
  private screenWidth = 0;
  public showCarouselInDesktop!: boolean;

  @Input('categories') categories: any;
  @Input('technologies') technologies: any;

  private projectActiveItem = 0;

  @ViewChildren('carouselMobile') carouselMobileView: any;
  @ViewChildren('carouselDesktop') carouselDesktopView: any;

  @ViewChild('selectCategories') selectCategories: any;
  @ViewChild('selectTechnologies') selectTechnologies: any;

  private touchXStart = 0;
  private touchYStart = 0;

  private timerAutoPlay: any;

  private projectActiveItemNumber = 0;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    this.showCarouselInDesktop =
      this.screenWidth >= this.minimumScreenMobile ? true : false;
    this.itemsBackup = this.items;
    window.onresize = (e: any) => {
      this.screenWidth = e.target.innerWidth;
    };
  }

  ngAfterViewInit(): void {
    this.renderViewChildren();
  }

  renderViewChildren() {
    if (this.screenWidth < this.minimumScreenMobile)
      this.setActiveItemCarouselMobile(0);
    else this.setActiveItemCarouselDesktop(0);
  }

  onChangeCategory(event: any): void {
    let category = event.target.value;
    this.items = this.itemsBackup;
    if (category !== null && category !== 'description') {
      this.selectTechnologies.nativeElement.value = 'description';
      this.items = this.itemsBackup.filter((project: any) =>
        project.category.includes(category)
      );
    }
    setTimeout(() => {
      if (this.screenWidth >= this.minimumScreenMobile) {
        this.setActiveItemCarouselDesktop(0);
      } else {
        this.setActiveItemCarouselMobile(0);
      }
    }, 500);
  }

  onChangeTechnology(event: any): void {
    let technology = event.target.value;
    this.items = this.itemsBackup;
    if (technology !== null && technology !== 'description') {
      this.selectCategories.nativeElement.value = 'description';
      this.items = this.itemsBackup.filter((project: any) =>
        project.body.technologies.includes(technology)
      );
    }
    setTimeout(() => {
      if (this.screenWidth >= this.minimumScreenMobile) {
        this.setActiveItemCarouselDesktop(0);
      } else {
        this.setActiveItemCarouselMobile(0);
      }
    }, 500);
  }

  onLeft(index: number, methodOfActiveItem: Function) {
    index = index - 1;
    this.onAutoPlayCarousel();
    methodOfActiveItem(index);
  }

  onRight(index: number, methodOfActiveItem: Function) {
    index = index + 1;
    this.onAutoPlayCarousel();
    methodOfActiveItem(index);
  }

  setActiveItemCarouselMobile = (index: number) => {
    if (this.carouselMobileView) return;
    const itensCarouselLength = this.carouselMobileView?._results.length;

    if (index < 0) index = itensCarouselLength - 1;
    if (index >= itensCarouselLength) index = 0;

    this.projectActiveItemNumber = index;

    this.setDesactiveElementsOfCarousel(this.carouselMobileView);
    this.carouselMobileView?._results[index]?.nativeElement?.classList?.add(
      'active'
    );
  };

  setActiveItemCarouselDesktop = (index: number) => {
    if (!this.carouselDesktopView) return;
    const itensCarouselLength = this.carouselDesktopView?._results.length;

    if (index < 0) index = itensCarouselLength - 1;
    if (index >= itensCarouselLength) index = 0;

    this.projectActiveItemNumber = index;

    this.setDesactiveElementsOfCarousel(this.carouselDesktopView);
    this.carouselDesktopView?._results[index]?.nativeElement?.classList?.add(
      'active'
    );
  };

  setDesactiveElementsOfCarousel(elements: any) {
    for (let element of elements._results) {
      element?.nativeElement?.classList?.remove('active');
    }
  }

  touchStart(evt: any): void {
    this.touchXStart = evt.touches[0].clientX;
    this.touchYStart = evt.touches[0].clientY;
  }

  touchMove(index: number, methodOfActiveItem: Function, evt: any) {
    this.leftRightTouchMove(index, methodOfActiveItem, evt);
  }

  leftRightTouchMove(index: number, methodOfActiveItem: Function, evt: any) {
    if (!this.touchXStart && !this.touchYStart) return;

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.touchXStart - xUp;
    let yDiff = this.touchYStart - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.onRight(index, methodOfActiveItem);
      } else {
        this.onLeft(index, methodOfActiveItem);
      }
      this.touchXStart = this.touchYStart = 0;
    }
  }

  moveItOnDot(index: number, methodOfActiveItem: Function) {
    methodOfActiveItem(index);
  }

  onAutoPlayCarousel() {
    clearInterval(this.timerAutoPlay);
    this.timerAutoPlay = setInterval(() => {
      if (this.projectActiveItem + 1 == this.items.length)
        this.projectActiveItemNumber = 0;
      this.screenWidth >= this.minimumScreenMobile
        ? this.onRight(
            this.projectActiveItemNumber,
            this.setActiveItemCarouselDesktop
          )
        : this.onRight(
            this.projectActiveItemNumber,
            this.setActiveItemCarouselMobile
          );
      this.projectActiveItemNumber += 1;
    }, 10000);
  }
}
