import { Component, Input, OnInit } from '@angular/core';
import { Covid } from './models/states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  aba: string = 'data';
  covidData: Array<Covid> = [];
  realData: any;

  ngOnInit() {}
}
