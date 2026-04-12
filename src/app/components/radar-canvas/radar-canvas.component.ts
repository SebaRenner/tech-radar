import { Component, input, OnInit, output } from '@angular/core';
import { Blip } from '../../models/radar.models';

@Component({
  selector: 'app-radar-canvas',
  templateUrl: './radar-canvas.component.html',
  styleUrl: './radar-canvas.component.scss'
})
export class RadarCanvasComponent implements OnInit {
  blips = input.required<Blip[]>();
  blipSelected = output<Blip>();

  hoveredBlip: Blip | null = null;

  private positionCache = new Map<string, { x: number; y: number }>();

  readonly cx = 400;
  readonly cy = 400;
  readonly rings = [140, 220, 290, 360];
  readonly ringLabels = ['Adopt', 'Trial', 'Assess', 'Caution'];
  readonly blipFill = '#2C3E50';

  readonly quadrantColors = ['#378ADD', '#1D9E75', '#EF9F27', '#E05C5C'];
  readonly quadrantTextColors = ['#185FA5', '#0F6E56', '#854F0B','#7B1F1F'];
  readonly quadrantLabels = [
    ['Techniques'],
    ['Tools'],
    ['Languages &', 'Frameworks'],
    ['Platforms'],
  ];

  readonly quadrantPaths = [
    'M400,400 L0,400 A400,400 0 0,1 400,0 Z',     // [0] top-left     → Techniques
    'M400,400 L400,0 A400,400 0 0,1 800,400 Z',   // [1] top-right    → Tools
    'M400,400 L800,400 A400,400 0 0,1 400,800 Z', // [2] bottom-right → Languages & Frameworks
    'M400,400 L400,800 A400,400 0 0,1 0,400 Z',   // [3] bottom-left  → Platforms
  ];

  readonly quadrantLabelPos = [
    { x: 95, y: 68 },   // Techniques
    { x: 730, y: 68 },  // Tools
    { x: 700, y: 726 }, // Languages & Frameworks
    { x: 90, y: 726 },  // Platforms
  ];

  ngOnInit(): void {
    this.initBlipPositions();
  }

  onBlipEnter(blip: Blip) {
    this.hoveredBlip = blip;
  }

  onBlipLeave() {
    this.hoveredBlip = null;
  }
  
  ringOpacity(r: number): number {
    const index = this.rings.indexOf(r);
    return [1, 0.65, 0.4, 0.2][index];
  }

  ringLabelPos(ringIndex: number): { x: number; y: number } {
    const r = this.rings[ringIndex];
    const prev = ringIndex > 0 ? this.rings[ringIndex - 1] : 0;
    const mid = this.cx + prev + (r - prev) / 2;
    return { x: mid, y: this.cy - 8 };
  }

  blipPosition(blip: Blip): { x: number; y: number } {
    return this.positionCache.get(blip.name) ?? { x: this.cx, y: this.cy };
  }

  private initBlipPositions(): void {
    const blipDiameter = 32;
    const groups = new Map<string, Blip[]>();

    this.blips().forEach(blip => {
      const key = `${blip.quadrant}-${blip.ring}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(blip);
    });

    groups.forEach((groupBlips, key) => {
      const [quadrant, ring] = key.split('-').map(Number);
      const outerR = this.rings[ring];
      const innerR = ring > 0 ? this.rings[ring - 1] : 0;
      const padding = (outerR - innerR) * 0.15;
      const safeInner = Math.max(innerR + padding, 35);
      const safeOuter = outerR - padding;
      const startAngle = [180, 270, 0, 90][quadrant];

      // how many radial bands fit in the safe zone
      const numBands = Math.max(1, Math.floor((safeOuter - safeInner) / blipDiameter));
      const bandSize = (safeOuter - safeInner) / numBands;

      // count blips per band (outer bands fill first)
      const bandCounts = new Array(numBands).fill(0);
      groupBlips.forEach((_, i) => {
        bandCounts[(numBands - 1) - (i % numBands)]++;
      });

      // place each blip at its band radius and evenly spread angle
      groupBlips.forEach((blip, i) => {
        const band = (numBands - 1) - (i % numBands);
        const indexInBand = Math.floor(i / numBands);
        const r = safeInner + (band + 0.5) * bandSize;
        const angleDeg = startAngle + 15 + (indexInBand + 0.5) * (60 / bandCounts[band]);
        const angleRad = (angleDeg * Math.PI) / 180;

        this.positionCache.set(blip.name, {
          x: this.cx + r * Math.cos(angleRad),
          y: this.cy + r * Math.sin(angleRad),
        });
      });
    });
  }
}