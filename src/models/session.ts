import { Player } from "./player";
import { Roll } from "./roll";

export interface Session {
    id: string;
    name: string;
    players: Player[];
    rolls: Roll[];
}