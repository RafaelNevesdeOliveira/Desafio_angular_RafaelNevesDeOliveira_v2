import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Covid } from '../models/states';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  dadosCovid: Array<Covid> = [];
  dadoReal: any;

  ngOnInit() {
    this.getCases();
  }

  getCases() {
    this.homeService.getCases().subscribe((data) => {
      let obj: any = data;
      this.dadosCovid = obj.data;
      this.dadoReal = this.dadosCovid.find(
        (x) => x.state == this.dadosCovid[0].state
      );
    });
  }

  onChange(deviceValue: any) {
    this.dadoReal = this.dadosCovid.find(
      (x) => x.state == deviceValue.target.value
    );
  }
}
