import { Component, OnInit } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';
import { V2FooterService } from '../../services/footer.service';

@Component({
  selector: 'v2-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class V2FooterComponent implements OnInit {
  footer?: any;

  constructor(private api: V2FooterService) {}

  ngOnInit(): void {
    this.api.getAllPublished('v1').subscribe({
      next: (res) => {
        this.footer = res.data[0];
      },
    });
  }
}
