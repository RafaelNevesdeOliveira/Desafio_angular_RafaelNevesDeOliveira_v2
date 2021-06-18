import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { DataComponent } from './data/data.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ChartsComponent } from './charts/charts.component';


@NgModule({
  declarations: [HomeComponent, DataComponent, DataGridComponent, ChartsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxChartModule,
    DxDataGridModule
  ]
})
export class HomeModule { }
