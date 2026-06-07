import { Component, input, OnInit, output } from '@angular/core';
import { Blip } from '../../models/radar.models';

interface BandLayout {
  count: number;
  size: number;
  blipCounts: number[];
}

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
  readonly rings = [150, 220, 290, 360];
  readonly ringLabels = ['Adopt', 'Trial', 'Assess', 'Caution'];
  readonly ringOpacities = [1, 0.65, 0.4, 0.2];
  readonly blipFill = '#2C3E50';

  readonly tooltipMinWidth = 70;
  readonly tooltipPadding = 10;
  readonly tooltipCharWidth = 5.1;

  readonly quadrantColors = ['#378ADD', '#1D9E75', '#EF9F27', '#E05C5C'];
  readonly quadrantTextColors = ['#185FA5', '#0F6E56', '#854F0B', '#7B1F1F'];
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

  private readonly BLIP_RADIUS = 14;
  private readonly BLIP_DIAMETER = this.BLIP_RADIUS * 2;
  private readonly BLIP_SAFE_MARGIN = this.BLIP_RADIUS + 4;

  private readonly ARC_SPREAD_TARGET_DEG = 60;
  private readonly ARC_SPREAD_MIN_DEG = 30;
  private readonly ARC_SPREAD_MAX_DEG = 80;

  private readonly ANGULAR_SPACING_FACTOR = 5;
  private readonly QUADRANT_START_ANGLES = [180, 270, 0, 90];

  ngOnInit(): void {
    this.initBlipPositions();
  }

  onBlipEnter(blip: Blip) {
    this.hoveredBlip = blip;
  }

  onBlipLeave() {
    this.hoveredBlip = null;
  }

  tooltipWidth(blip: Blip): number {
    return Math.max(this.tooltipMinWidth, blip.name.length * this.tooltipCharWidth + this.tooltipPadding * 2);
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
    this.groupBlipsByQuadrantAndRing().forEach((blips, key) => {
      const [quadrant, ring] = key.split('-').map(Number);
      const bounds = this.getRingSafeBounds(ring);
      const bands = this.assignBlipsToBands(blips, bounds);
      this.resolveBlipPositions(blips, bands, bounds, quadrant);
    });
  }

  private groupBlipsByQuadrantAndRing(): Map<string, Blip[]> {
    const groups = new Map<string, Blip[]>();
    this.blips().forEach(blip => {
      const key = `${blip.quadrant}-${blip.ring}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(blip);
    });
    return groups;
  }

  private getRingSafeBounds(ring: number): { inner: number; outer: number } {
      const outerR = this.rings[ring];
      const innerR = ring > 0 ? this.rings[ring - 1] : 0;
    return {
      inner: innerR + this.BLIP_SAFE_MARGIN,
      outer: outerR - this.BLIP_SAFE_MARGIN,
    };
  }

  private assignBlipsToBands(
    blips: Blip[],
    bounds: { inner: number; outer: number }
  ): BandLayout {
    const availableWidth = bounds.outer - bounds.inner;
    const count = Math.max(1, Math.floor(availableWidth / this.BLIP_DIAMETER));
    const size = availableWidth / count;

    const blipCounts = new Array(count).fill(0);
    blips.forEach((_, i) => {
      const bandIndex = (count - 1) - (i % count); // outermost first
      blipCounts[bandIndex]++;
      });

    return { count, size, blipCounts };
  }

  private computeArcSpreadDeg(blipCount: number, radius: number): number {
    const minAngularGap = (this.BLIP_DIAMETER + 4) / radius * (180 / Math.PI);
    const maxAngularGap = (this.BLIP_DIAMETER * this.ANGULAR_SPACING_FACTOR) / radius * (180 / Math.PI);

    const minSpread = blipCount * minAngularGap;
    const maxSpread = blipCount * maxAngularGap;

    const naturalSpread = Math.max(minSpread, Math.min(maxSpread, this.ARC_SPREAD_TARGET_DEG));
    return Math.min(this.ARC_SPREAD_MAX_DEG, Math.max(this.ARC_SPREAD_MIN_DEG, naturalSpread));
  }

  private computeBlipAngleRad(
    positionInBand: number,
    blipCount: number,
    arcSpreadDeg: number,
    quadrantStartAngleDeg: number,
  ): number {
    const arcStartAngleDeg = quadrantStartAngleDeg + (90 - arcSpreadDeg) / 2;
    const angleDeg = arcStartAngleDeg + (positionInBand + 0.5) * (arcSpreadDeg / blipCount);
    return angleDeg * (Math.PI / 180);
  }

  private resolveBlipPositions(
    blips: Blip[],
    bands: BandLayout,
    bounds: { inner: number; outer: number },
    quadrant: number,
  ): void {
    const quadrantStartAngle = this.QUADRANT_START_ANGLES[quadrant];

    blips.forEach((blip, i) => {
      const bandIndex = (bands.count - 1) - (i % bands.count);
      const positionInBand = Math.floor(i / bands.count);

      const radius = bounds.inner + (bandIndex + 0.5) * bands.size;
      const arcSpreadDeg = this.computeArcSpreadDeg(bands.blipCounts[bandIndex], radius);
      const angleRad = this.computeBlipAngleRad(
        positionInBand,
        bands.blipCounts[bandIndex],
        arcSpreadDeg,
        quadrantStartAngle,
      );

        this.positionCache.set(blip.name, {
        x: this.cx + radius * Math.cos(angleRad),
        y: this.cy + radius * Math.sin(angleRad),
      });
    });
  }
}