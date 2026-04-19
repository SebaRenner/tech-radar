import { Component, signal } from '@angular/core';
import { RadarCanvasComponent } from './components/radar-canvas/radar-canvas.component';
import { Blip } from './models/radar.models';
import { blips } from './data/radar.data';

@Component({
  selector: 'app-root',
  imports: [RadarCanvasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly blips: Blip[] = blips.sort((a, b) => a.quadrant - b.quadrant);

  onBlipSelected(blip: Blip) {
    console.log('Selected blip:', blip);
  }
}
