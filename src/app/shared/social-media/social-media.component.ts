import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  @Input() data!: {
    class: string;
    href: string;
    target: string;
    'data-toggle': string;
    'data-placement': string;
    title: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
