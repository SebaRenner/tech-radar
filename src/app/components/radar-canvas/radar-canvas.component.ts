import { Component, input } from '@angular/core';
import { Blip } from '../../models/radar.models';

@Component({
  selector: 'app-radar-canvas',
  templateUrl: './radar-canvas.component.html',
  styleUrl: './radar-canvas.component.scss'
})
export class RadarCanvasComponent {
  blips = input.required<Blip[]>(); 

  readonly cx = 400;
  readonly cy = 400;
  readonly rings = [130, 210, 290, 360];
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

  blipPosition(blip: Blip, index: number): { x: number; y: number } {
    const outerR = this.rings[blip.ring];
    const innerR = blip.ring > 0 ? this.rings[blip.ring - 1] : 0;
    const bandWidth = outerR - innerR;

    const padding = bandWidth * 0.2;
    const safeInner = innerR + padding;
    const safeOuter = outerR - padding;
    const safeWidth = safeOuter - safeInner;

    const midR = (safeInner + safeOuter) / 2;
    const jitterRange = safeWidth * 0.4;
    const jitter = ((index * 37) % jitterRange) - jitterRange / 2;
    const r = midR + jitter;

    const quadrantStartAngle = [180, 270, 0, 90][blip.quadrant];
    const angleInQuadrant = 25 + ((index * 53) % 40);
    const angleDeg = quadrantStartAngle + angleInQuadrant;
    const angleRad = (angleDeg * Math.PI) / 180;

    return {
      x: this.cx + r * Math.cos(angleRad),
      y: this.cy + r * Math.sin(angleRad),
    };
  }
}