import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Footer } from './footer.mock';

@Component({
  selector: 'v1-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class V1FooterComponent implements OnInit {
  public footer?: any;

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.getFooter();
  }

  async getFooter() {
    this.footerService.getFooter().subscribe({
      next: (result) => {
        this.footer = result[0];
      },
    });
  }
}
