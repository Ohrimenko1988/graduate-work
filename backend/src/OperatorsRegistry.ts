import { IOperator } from "./operators/interfaces/IOperator";
import { JoinUp } from "./operators/join-up/JoinUp";

export class OperatorsRegistry {
    private registry: IOperator[] = new Array();
    constructor() {
        this.registry.push(new JoinUp());
    }

    public get(): IOperator[] {
        return this.registry;
    }

}
