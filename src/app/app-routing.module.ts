import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'data-grid',
    loadChildren: () =>
      import('../app/pages/home/data-grid/data-grid.component').then((m) => m.DataGridComponent),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('../app/pages/home/charts/charts.component').then((m) => m.ChartsComponent),
  },
  {
    path: 'diagram',
    loadChildren: () =>
      import('../app/pages/home/diagram/diagram/diagram.component').then((m) => m.DiagramComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
