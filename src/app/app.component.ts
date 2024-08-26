import { Component } from '@angular/core';
import { HeadlineComponent } from './shared/headline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadlineComponent],
  template: '<app-headline>Content Projection</app-headline>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
