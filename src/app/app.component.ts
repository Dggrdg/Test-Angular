import { Component, OnInit } from '@angular/core';
import { stationList } from '../station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'test';
  test = "Hello";
  list = stationList;

  date = new Date();

}
