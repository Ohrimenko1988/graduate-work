import axios from "axios";
import { JSDOM } from "jsdom";
import { IHotTour } from "./interfaces/IHotTour";
import { IOperator } from "./interfaces/IOperator";

export class JoinUp implements IOperator {
    public getHotTours(): IHotTour[] {
        return new Array<IHotTour>();
    }

    public parseHtml() {
        const headerOpt = { headers: { "x-requested-with": "http://localhost:3000" } };
        const requestUrl = "https://cors-anywhere.herokuapp.com/https://joinup.ua/hot-tours/";

        axios
            .get(requestUrl, headerOpt)
            .then((resp) => {
                const respData: string = resp.data;
                const page: JSDOM = new JSDOM(respData);

                console.log(page.window.document.title);
            }).catch((err) => {
                console.log(err);
            });

    }

}
