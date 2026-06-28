import { Component, input } from '@angular/core';
import { Blip, Ring } from '../../models/radar.models';

@Component({
  selector: 'app-blip-chips',
  templateUrl: './blip-chips.component.html',
  styleUrl: './blip-chips.component.scss',
})
export class BlipChipsComponent {
  blip = input.required<Blip>();
  readonly Ring = Ring;
  readonly quadrantLabels = ['Techniques', 'Tools', 'Languages & Frameworks', 'Platforms'];
}
