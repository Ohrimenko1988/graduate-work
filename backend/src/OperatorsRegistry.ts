import { IOperator } from "./operators/interfaces/IOperator";
import { JoinUp } from "./operators/join-up/JoinUp";
import { ITour } from "./operators/interfaces/ITour";
import { ISearchParams } from "./operators/interfaces/ISearchParams";

export class OperatorsRegistry {
    private registry: IOperator[] = new Array();
    constructor() {
        this.registry.push(new JoinUp());
    }

    public async searchTours(searchParams: ISearchParams): Promise<ITour[]> {
        let result: ITour[] = [];

        for (const operator of this.registry) {
            const tours: ITour[] = await operator.searchTours(searchParams);
            result = result.concat(tours);
        }

        return result;
    }

    public async getHotTours(): Promise<ITour[]> {
        let result: ITour[] = new Array();

        for (const operator of this.registry) {
            const tours: ITour[] = await operator.getHotTours();
            result = result.concat(tours);
        }

        return result;
    }

}
