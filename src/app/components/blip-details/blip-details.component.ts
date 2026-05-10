import { Component, input } from '@angular/core';
import { Blip } from '../../models/radar.models';
import { BlipChipsComponent } from '../blip-chips/blip-chips.component';

@Component({
  selector: 'app-blip-details',
  imports: [BlipChipsComponent],
  templateUrl: './blip-details.component.html',
  styleUrl: './blip-details.component.scss',
})
export class BlipDetailsComponent {
  blip = input<Blip | null>(null);
}
