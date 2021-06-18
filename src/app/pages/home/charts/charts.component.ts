import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Covid } from '../models/states';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  covidData: Array<Covid> = [];
  realData: any;

  ngOnInit() {
    this.getCases();
  }

  getCases() {
    this.homeService.getCases().subscribe((data) => {
      let obj: any = data;
      this.covidData = obj.data;
      this.realData = this.covidData.find(
        (x) => x.state == this.covidData[0].state
      );
    });
  }

  onChange(deviceValue: any) {
    this.realData = this.covidData.find(
      (x) => x.state == deviceValue.target.value
    );
  }
}
