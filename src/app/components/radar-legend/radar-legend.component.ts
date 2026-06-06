import { Component } from '@angular/core';

interface LegendRing {
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-radar-legend',
  templateUrl: './radar-legend.component.html',
  styleUrl: './radar-legend.component.scss',
})
export class RadarLegendComponent {
  readonly rings: LegendRing[] = [
    { emoji: '⭐', title: 'Adopt', description: 'My go-to stack and techniques when given the choice (and it makes sense to use them).' },
    { emoji: '🧪', title: 'Trial', description: 'Things I\'m actively using but haven\'t fully adopted or committed to yet.' },
    { emoji: '👀', title: 'Assess', description: 'Technologies I\'ve recently started using in a professional or personal context, but haven\'t fully grasped yet.' },
    { emoji: '⚠️', title: 'Caution', description: 'Used it. Wouldn\'t reach for it again — outclassed, punishing in production, or just not there yet.' },
  ];
}
