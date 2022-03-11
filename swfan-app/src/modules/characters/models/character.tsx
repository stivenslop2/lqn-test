import { Homeworld } from "./homeworld";

export interface Character {
    id: number;
    name: string;
    birthYear: string;
    height: number;
    homeworld: Homeworld
    handleOpen: any;
}