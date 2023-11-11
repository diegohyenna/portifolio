import { Component, OnInit } from '@angular/core';
import { V2PagesService } from '../../../services/pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  constructor(private router: Router, private pagesService: V2PagesService) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl(this.router.url);
  }
}
