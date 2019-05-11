export class CountryBinder {
    private countriesDefinition: Map<string, number> = new Map();

    constructor() {
        this.countriesDefinition.set("Туреччина", 8);
        this.countriesDefinition.set("Єгипет", 9);
        this.countriesDefinition.set("Іспанія", 5);
    }

    public get(): Map<string, number> {
        return this.countriesDefinition;
    }
}
