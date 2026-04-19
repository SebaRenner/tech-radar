import { Component, signal } from '@angular/core';
import { RadarCanvasComponent } from './components/radar-canvas/radar-canvas.component';
import { Blip } from './models/radar.models';
import { blips } from './data/radar.data';
import { FooterComponent } from "./components/footer/footer.component";
import { RadarLegendComponent } from './components/radar-legend/radar-legend.component';

@Component({
  selector: 'app-root',
  imports: [RadarCanvasComponent, RadarLegendComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly blips: Blip[] = blips.sort((a, b) => a.quadrant - b.quadrant);

  onBlipSelected(blip: Blip) {
    console.log('Selected blip:', blip);
  }
}
