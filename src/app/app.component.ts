import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponent } from './shared/headline';
import { CustomCardComponent } from './shared/custom-card/custom-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadlineComponent, CustomCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
}
