import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { DataComponent } from './data/data.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ChartsComponent } from './charts/charts.component';
import { DiagramComponent } from './diagram/diagram/diagram.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  declarations: [
    HomeComponent,
    DataComponent,
    DataGridComponent,
    ChartsComponent,
    DiagramComponent,
  ],
  imports: [CommonModule,DiagramModule, HomeRoutingModule, DxChartModule, DxDataGridModule],
})
export class HomeModule {}
