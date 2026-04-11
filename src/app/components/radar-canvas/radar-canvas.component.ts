import { Component } from '@angular/core';

@Component({
  selector: 'app-radar-canvas',
  templateUrl: './radar-canvas.component.html',
  styleUrl: './radar-canvas.component.scss'
})
export class RadarCanvasComponent {
  readonly cx = 400;
  readonly cy = 400;
  readonly rings = [90, 180, 270, 360];
  readonly ringLabels = ['Adopt', 'Trial', 'Assess', 'Caution'];

  readonly quadrantColors = ['#378ADD', '#1D9E75', '#EF9F27', '#E05C5C'];
  readonly quadrantTextColors = ['#185FA5', '#0F6E56', '#854F0B','#7B1F1F'];
  readonly quadrantLabels = [
    ['Techniques'],
    ['Tools'],
    ['Platforms'],
    ['Languages &', 'Frameworks'],  // split here
  ];

  readonly quadrantPaths = [
    'M400,400 L400,0 A400,400 0 0,1 800,400 Z',
    'M400,400 L800,400 A400,400 0 0,1 400,800 Z',
    'M400,400 L400,800 A400,400 0 0,1 0,400 Z',
    'M400,400 L0,400 A400,400 0 0,1 400,0 Z',
  ];

  readonly quadrantLabelPos = [
    { x: 95, y: 68 },   // Techniques
    { x: 730, y: 68 },  // Tools
    { x: 90, y: 726 },  // Platforms
    { x: 700, y: 726 }, // Languages & Frameworks
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
}