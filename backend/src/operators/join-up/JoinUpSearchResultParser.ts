import { ITour } from "../interfaces/ITour";
import { AppConstants } from "../../AppConstants";
import { ISearchParams } from "../interfaces/ISearchParams";
import axios from "axios";
import { JSDOM } from "jsdom";

export class JoinUpSearchResultParser {
    public parse(document: Document, params: ISearchParams): Promise<ITour[]> {
        const fullCompletedTours: ITour[] = new Array();

        return this.getToursDescriptions(document, params)
            .then((tours: ITour[]) => {

                for (const tour of tours) {
                    axios.get(tour.tourLink)
                        .then((resp) => {
                            const tourDocument: Document = new JSDOM(resp.data).window.document;
                            const imageElement: Element | null = tourDocument.querySelector(".hotel_header_wrap");

                            if (imageElement) {
                                tour.imageSource = "" + imageElement.getAttribute("data-image");
                                fullCompletedTours.push(tour);
                            }
                        });
                }
            })
            .then(() => {
                console.log(fullCompletedTours);
                return Promise.resolve<ITour[]>(fullCompletedTours);
            });
    }
    private getToursDescriptions(document: Document, params: ISearchParams): Promise<ITour[]> {
        const tours: ITour[] = new Array();

        let tourTitle: string;
        let tourUrl: string;
        let tourCountry: string;
        let tourResort: string;
        let tourDateOfDeparture: string;
        let tourDuration: string;
        let tourPrice: string;
        let tourAccomodation: string;

        document.querySelectorAll(".box").forEach((box: Element) => {
            let temporaryElement: Element | null;

            // hotel, stars and tour link
            temporaryElement = box.querySelector(".title_hotel_stars a");
            if (!temporaryElement) {
                console.log("fail");
                return;
            }

            tourTitle = "" + temporaryElement.getAttribute("title");
            tourUrl = AppConstants.JOIN_UP_BASE_URL + temporaryElement.getAttribute("href");
            console.log(tourTitle);
            console.log(tourUrl);

            // country and resort

            temporaryElement = box.querySelector(".title_loc_hotel");
            if (!temporaryElement) {
                return;
            }

            tourCountry = "" + temporaryElement.textContent;
            tourCountry = tourCountry.trim().replace(/\t/gi, "").replace(/\n/gi, "");
            const countryAndResort: string[] = tourCountry.split(",");
            tourCountry = countryAndResort[0].trim();
            tourResort = countryAndResort[1].trim();
            console.log(tourCountry);
            console.log(tourResort);

            // date of departure

            temporaryElement = box.querySelector(".flight_date strong");
            if (!temporaryElement) {
                return;
            }

            tourDateOfDeparture = "" + temporaryElement.textContent;
            console.log(tourDateOfDeparture);

            // duration

            temporaryElement = box.querySelector(".tour_nights strong");
            if (!temporaryElement) {
                return;
            }

            tourDuration = "" + temporaryElement.textContent;
            console.log(tourDuration);

            // price

            temporaryElement = box.querySelector(".price_search_tours");
            if (!temporaryElement) {
                return;
            }

            tourPrice = "" + temporaryElement.textContent;
            const priceItems: string[] = tourPrice.split(/\s/g);
            priceItems.pop();
            tourPrice = priceItems.join("");
            console.log(tourPrice);

            // accomodation

            temporaryElement = box.querySelector(".title_room_accom_meal .meal");

            if (!temporaryElement) {
                return;
            }

            tourAccomodation = "" + temporaryElement.textContent;
            console.log(tourAccomodation);
            console.log("\n\n==============\n\n");

            tours.push({
                title: tourTitle,
                tourLink: tourUrl,
                country: tourCountry,
                resort: tourResort,
                departureDate: tourDateOfDeparture,
                duration: Number.parseInt(tourDuration, 10),
                price: tourPrice,
                adultsCapacity: params.adultsCapacity,
                childrenCapacity: params.childrenCapacity,
                arrivalDate: "",
                imageSource: "",
                accommodation: tourAccomodation
            });

        });

        return Promise.resolve(tours);
    }

}
