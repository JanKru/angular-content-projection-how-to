import { Component } from '@angular/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [],
  template: '<h1><ng-content></ng-content></h1>',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {}
