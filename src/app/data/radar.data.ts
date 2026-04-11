import { Blip, Quadrant, Ring } from "../models/radar.models";

export const blips: Blip[] = [
    {
        name: "Angular",
        description: "A popular front-end framework for building web applications.",
        ring: Ring.Adopt,
        quadrant: Quadrant.LanguagesAndFrameworks
    },
    {
        name: "pnpm",
        description: "A fast, disk space efficient package manager for JavaScript.",
        ring: Ring.Trial,
        quadrant: Quadrant.Tools
    }
]; 