import { ITour } from "./ITour";

export interface IOperator {
    getHotTours(): Promise<ITour[]>;
    searchTours(): Promise<ITour[]>;
}
