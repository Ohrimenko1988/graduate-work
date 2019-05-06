import axios from "axios";
import { JSDOM } from "jsdom";
import { IHotTour } from "./interfaces/IHotTour";
import { IOperator } from "./interfaces/IOperator";

export class JoinUp implements IOperator {
    private static readonly HOT_TOUR_CSS_LOCATOR = "ul[data-view-type-id='goryashhie-tury']>li.box>a";
    private hotToursPage: Document = new JSDOM().window.document;

    public getHotTours(): IHotTour[] {
        return new Array<IHotTour>();
    }

    public getHotToursPage(callback: (document: Document) => void) {
        const headerOpt = { headers: { "x-requested-with": "http://localhost:3000" } };
        const requestUrl = "https://cors-anywhere.herokuapp.com/https://joinup.ua/hot-tours/";

        axios.get(requestUrl, headerOpt)
            .then((resp) => {
                const respData: string = resp.data;
                this.hotToursPage = new JSDOM(respData).window.document;
                callback(this.hotToursPage);
            }).catch((err) => {
                console.log(err);
            });
    }

    public parseDocument(document: Document) {
        document.querySelectorAll(JoinUp.HOT_TOUR_CSS_LOCATOR).forEach((element) => {
            let tourLink: string = "";

            const hrefValue: string | null = element.getAttribute("href");

            if (hrefValue) {
                tourLink = hrefValue;
            }

            console.log("===>>> '", tourLink, " ' ");

        });
    }

}
