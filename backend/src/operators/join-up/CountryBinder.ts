export class CountryBinder {
    private countriesDefinition: Map<string, number> = new Map();

    constructor() {
        this.countriesDefinition.set("Турция", 8);
        this.countriesDefinition.set("Египет", 9);
        this.countriesDefinition.set("Испания", 5);
    }

    public get(): Map<string, number> {
        return this.countriesDefinition;
    }
}
