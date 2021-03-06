import axios from "axios";
import { JSDOM } from "jsdom";
import { IOperator } from "../interfaces/IOperator";
import { ITour } from "../interfaces/ITour";
import { JoinUpHotTourPageParser } from "./JoinUpHotTourPageParser";
import fs from "fs";
import { JoinUpSearchInvoker } from "./JoinUpSearchInvoker";
import { ISearchParams } from "../interfaces/ISearchParams";

export class JoinUp implements IOperator {
    public static readonly BASE_URL = "https://joinup.ua";
    private static readonly HOT_TOUR_CSS_LOCATOR = "ul[data-view-type-id='goryashhie-tury']>li.box>a";
    private static readonly TOUR_IMAGE_CSS_LOCATOR = JoinUp.HOT_TOUR_CSS_LOCATOR + " .cover_bg_tour";
    private hotToursParser: JoinUpHotTourPageParser = new JoinUpHotTourPageParser();
    private hotToursPage: Document = new JSDOM().window.document;
    private searcInvoker: JoinUpSearchInvoker = new JoinUpSearchInvoker();

    public getHotTours(): Promise<ITour[]> {
        const headerOpt = { headers: { "x-requested-with": "http://localhost:8080" } };
        const requestUrl = `https://cors-anywhere.herokuapp.com/${JoinUp.BASE_URL}/hot-tours/`;

        return axios.get(requestUrl, headerOpt)
            .then((resp): ITour[] => {
                const respData: string = resp.data;
                this.hotToursPage = new JSDOM(respData).window.document;
                return this.hotToursParser.parseDocument(this.hotToursPage);
            });
    }

    public searchTours(params: ISearchParams): Promise<ITour[]> {
        return this.searcInvoker.search(params);
    }

}
