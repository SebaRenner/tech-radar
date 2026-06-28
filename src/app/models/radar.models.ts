export enum Ring {
  Adopt = 0,
  Trial = 1,
  Assess = 2,
  Caution = 3,
}

export enum Quadrant {
  Techniques = 0,
  Tools = 1,
  LanguagesAndFrameworks = 2,
  Platforms = 3,
}

export interface Blip {
  name: string;
  description: string;
  ring: Ring;
  quadrant: Quadrant;
  comment?: string;
}
