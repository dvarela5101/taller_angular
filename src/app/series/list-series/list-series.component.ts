import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-list-series',
  standalone: false,
  templateUrl: './list-series.component.html',
})
export class ListSeriesComponent implements OnInit {
  series: Serie[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

  get averageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return total / this.series.length;
  }
}
