import { Component } from '@angular/core';
import { SeriesModule } from './series/series.module';

@Component({
  selector: 'app-root',
  imports: [SeriesModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
