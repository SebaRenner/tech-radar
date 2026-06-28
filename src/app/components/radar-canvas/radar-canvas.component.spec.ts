import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadarCanvasComponent } from './radar-canvas.component';
import { Blip, Quadrant, Ring } from '../../models/radar.models';

const testBlips: Blip[] = [
  {
    name: 'Adopted Technique',
    description: 'A technique in the adopt ring.',
    quadrant: Quadrant.Techniques,
    ring: Ring.Adopt,
  },
  {
    name: 'Trial Tool',
    description: 'A tool in the trial ring.',
    quadrant: Quadrant.Tools,
    ring: Ring.Trial,
  },
  {
    name: 'Assessed Platform',
    description: 'A platform in the assess ring.',
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess,
  },
];

const quadrantMidAngle: Record<Quadrant, number> = {
  [Quadrant.Techniques]: 225,
  [Quadrant.Tools]: 315,
  [Quadrant.LanguagesAndFrameworks]: 45,
  [Quadrant.Platforms]: 135,
};

const polar = (component: RadarCanvasComponent, pos: { x: number; y: number }) => {
  const dx = pos.x - component.cx;
  const dy = pos.y - component.cy;
  return {
    distance: Math.hypot(dx, dy),
    angle: ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360,
  };
};

describe('RadarCanvasComponent', () => {
  let component: RadarCanvasComponent;
  let fixture: ComponentFixture<RadarCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarCanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadarCanvasComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('blips', testBlips);
    fixture.detectChanges();
  });

  it.each(testBlips)('places "$name" inside its ring band', (blip) => {
    const { distance } = polar(component, component.blipPosition(blip));
    const outer = component.rings[blip.ring];
    const inner = blip.ring > 0 ? component.rings[blip.ring - 1] : 0;

    expect(distance).toBeGreaterThan(inner);
    expect(distance).toBeLessThan(outer);
  });

  it.each(testBlips)('places "$name" within its quadrant arc', (blip) => {
    const { angle } = polar(component, component.blipPosition(blip));

    expect(angle).toBeCloseTo(quadrantMidAngle[blip.quadrant]);
  });
});
