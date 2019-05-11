import axios from "axios";
import { ISearchParams } from "../interfaces/ISearchParams";
import { AppConstants } from "../../AppConstants";
import { ResortsBinder } from "./ResortsBinder";
import { StarsBinder } from "./StarsBinder";
import { AccomodationBinder } from "./AccomodationBinder";
import { JoinUpSearchResultParser } from "./JoinUpSearchResultParser";
import { ITour } from "../interfaces/ITour";
import { JSDOM } from "jsdom";
import { CountryBinder } from "./CountryBinder";
import fs from "fs";

interface IBindedParams {
    resorts: number[];
    stars: number[];
    accomodations: number[];
    country: number;
}

export class JoinUpSearchInvoker {
    private resortsBinder: Map<string, number[]>;
    private starsBinder: Map<string, number>;
    private accomodationBinder: Map<string, number>;
    private countryBinder: Map<string, number>;

    constructor() {
        this.resortsBinder = new ResortsBinder().get();
        this.starsBinder = new StarsBinder().get();
        this.accomodationBinder = new AccomodationBinder().get();
        this.countryBinder = new CountryBinder().get();
    }

    public search(params: ISearchParams): Promise<ITour[]> {
        const requestUrl: string = this.createRequestUrlWithQueries(params);

        console.log(requestUrl);

        return axios.get(requestUrl)
            .then((resp) => {
                const htmlPage: string = `<!DOCTYPE html><head></head><body>${"" + resp.data}</body></html>`;
                const respDocument: Document = new JSDOM(htmlPage).window.document;

                fs.writeFileSync("resp-page.html", htmlPage);

                return Promise.resolve<ITour[]>(
                    new JoinUpSearchResultParser().parse(respDocument, params)
                );
            });
    }

    private createRequestUrlWithQueries(params: ISearchParams): string {
        const parsedOptions: IBindedParams = this.parseInputOptions(params);

        return `${AppConstants.JOIN_UP_SEARCH_URL}?` +
            `ACTION=SearchTour_PRICES&TOWNFROMINC=18&` +
            `ADULT=${params.adultsCapacity}&` +
            `CHILD=${params.childrenCapacity}&` +
            `CHILD_AGE=&` +
            `CHECKIN_BEG=${params.dateOfDeparture}&` +
            `CHECKIN_END=${params.dateOfArrival}&` +
            `STATEINC=${parsedOptions.country}&` +
            `NIGHTS_FROM=${params.durationOfStay}&` +
            `NIGHTS_TILL=${params.durationOfStay}&` +
            `PACKET=0&` +
            `PRICE_MIN=&` +
            `PRICE_MAX=&` +
            `CURRENCY=4&` +
            `CURRENCY_CODE=UAH&` +
            `PER_PAGE=0&` +
            `TOWNTO=[${parsedOptions.resorts}]&` +
            `TOWNTO_ANY=0&` +
            `STARS=[${parsedOptions.stars}]&` +
            `STARS_ANY=0&` +
            `HOTELS=[]&` +
            `HOTELS_ANY=1&` +
            `MEALS=[${parsedOptions.accomodations}]&` +
            `FREIGHT=0&` +
            `FILTER=1&` +
            `CAPTCHA=&` +
            `language=ru&` +
            `_=1557333543829`;
    }

    private parseInputOptions(params: ISearchParams): IBindedParams {
        let resorts: number[] = new Array();
        const stars: number[] = new Array();
        const accomodations: number[] = new Array();
        let country: number = 0;

        params.resorts.map((resort) => {
            const resortCode: number[] | undefined = this.resortsBinder.get(resort);
            if (!resortCode) {
                console.log(`Any matches with defined '${resort}' resort`);
                return;
            }

            resorts = resorts.concat(resortCode);
        });

        params.stars.map((star) => {
            const starCode: number | undefined = this.starsBinder.get(star);
            if (!starCode) {
                console.log(`Any matches with defined '${star}' star`);
                return;
            }

            stars.push(starCode);
        });

        params.accomodation.map((accomodationType) => {
            const accomodationCode: number | undefined = this.accomodationBinder.get(accomodationType);
            if (!accomodationCode) {
                console.log(`Any matches with defined '${accomodationType}' accomodation`);
                return;
            }

            accomodations.push(accomodationCode);
        });

        const countryCode: number | undefined = this.countryBinder.get(params.country);
        if (!countryCode) {
            console.log(`Any matches with defined '${params.country}' country`);
        }

        if (countryCode) {
            country = countryCode;
        }

        return { resorts, stars, accomodations, country };
    }

}
