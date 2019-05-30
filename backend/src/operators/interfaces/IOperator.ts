import { ITour } from "./ITour";
import { ISearchParams } from "./ISearchParams";

export interface IOperator {
    getHotTours(): Promise<ITour[]>;
    searchTours(params: ISearchParams): Promise<ITour[]>;
}
