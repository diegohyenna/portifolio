import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { V2PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  constructor(private router: Router, private pagesService: V2PagesService) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl(this.router.url);
  }
}
