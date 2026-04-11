import { Component, signal } from '@angular/core';
import { RadarCanvasComponent } from './components/radar-canvas/radar-canvas.component';

@Component({
  selector: 'app-root',
  imports: [RadarCanvasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
