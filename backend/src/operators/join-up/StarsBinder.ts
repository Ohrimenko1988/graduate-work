export class StarsBinder {
    private starsDefinitions: Map<string, number> = new Map();

    constructor() {
        this.starsDefinitions.set("2", 10001);
        this.starsDefinitions.set("3", 10002);
        this.starsDefinitions.set("4", 10003);
        this.starsDefinitions.set("5", 10004);
    }

    public get(): Map<string, number> {
        return this.starsDefinitions;
    }

}
