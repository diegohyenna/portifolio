import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { V2PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  constructor(private router: Router, private pagesService: V2PagesService) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl(this.router.url);
  }
}
