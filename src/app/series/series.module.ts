import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSeriesComponent } from './list-series/list-series.component';

@NgModule({
  declarations: [ListSeriesComponent],
  imports: [CommonModule],
  exports: [ListSeriesComponent],
})
export class SeriesModule {}
