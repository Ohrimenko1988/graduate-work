export class AccomodationBinder {
    private accomodationDefinitions: Map<string, number> = new Map();

    constructor() {
        this.accomodationDefinitions.set("AI", 10011);
        this.accomodationDefinitions.set("UAI", 10023);
        this.accomodationDefinitions.set("BB", 10001);
        this.accomodationDefinitions.set("FB", 10010);
        this.accomodationDefinitions.set("RO", 10020);
    }

    public get(): Map<string, number> {
        return this.accomodationDefinitions;
    }

}
