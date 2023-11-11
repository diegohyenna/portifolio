import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dgsite';

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme) document.body.classList.add(theme);
  }
}
