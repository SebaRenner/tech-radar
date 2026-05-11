import { Component, signal } from '@angular/core';
import { RadarCanvasComponent } from './components/radar-canvas/radar-canvas.component';
import { Blip } from './models/radar.models';
import { blips } from './data/radar.data';
import { FooterComponent } from "./components/footer/footer.component";
import { RadarLegendComponent } from './components/radar-legend/radar-legend.component';
import { BlipDetailsComponent } from './components/blip-details/blip-details.component';

@Component({
  selector: 'app-root',
  imports: [RadarCanvasComponent, RadarLegendComponent, BlipDetailsComponent , FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly blips: Blip[] = blips.sort((a, b) => a.quadrant - b.quadrant);
  selectedBlip = signal<Blip | null>(null);

  onBlipSelected(blip: Blip) {
    this.selectedBlip.set(blip);
  }

  onCloseDetails() {
    this.selectedBlip.set(null);
  }
}
