import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/dragula/dist/dragula.css',
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'app works!';
}
