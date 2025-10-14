import { DiceType } from "./dice";

export interface Roll {
    player: string;
    dice: DiceType;
    result: number;
    timestamp: string;
}