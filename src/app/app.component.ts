import { Component } from '@angular/core';
import { stationList } from '../station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
  test = "Hello";
  list = stationList;
}
