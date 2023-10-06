import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-svg-map></app-svg-map>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
}
