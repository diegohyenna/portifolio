import { MockService } from '../../../../../services/mock.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'v1-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class V1HomeComponent implements OnInit, AfterContentInit {
  public data: any = [];
  private storage: any = [];

  constructor(private mock: MockService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.getDataMocks();
  }

  getDataMocks() {
    const datas = this.mock.getAll();

    datas.pages.map((data: any) => {
      if (data.page === 'home') {
        this.getComponents(data.components);
      }
    });
  }

  getComponents(components: any) {
    components.map((items: any) => {
      if (items.components !== undefined) {
        return this.getComponents(items.components);
      }
      this.storage.push(items);
      return;
    });
    this.data = this.storage;
  }

  getDataApi() {
    // const datas = this.api.getAll();
  }
}
