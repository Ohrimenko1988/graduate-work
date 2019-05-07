import { JSDOM } from "jsdom";
import { ITour } from "../interfaces/ITour";
import { JoinUp } from "./JoinUp";

export class JoinUpHotTourPageParser {
    private static readonly HOT_TOUR_CSS_LOCATOR = "ul[data-view-type-id='goryashhie-tury']>li.box>a";
    private static readonly TOUR_IMAGE_CSS_LOCATOR = JoinUpHotTourPageParser.HOT_TOUR_CSS_LOCATOR + " .cover_bg_tour";
    private hotToursPage: Document = new JSDOM().window.document;

    public parseDocument(document: Document): ITour[] {
        const hotTours: ITour[] = new Array();

        document.querySelectorAll(JoinUpHotTourPageParser.HOT_TOUR_CSS_LOCATOR).forEach((element) => {
            let tourLink: string = "-";
            let tourImage: string = "-";
            let tourTitle: string = "-";
            let tourCountry: string = "-";
            let tourResort: string = "-";
            let tourAccommodation: string = "-";
            let duration: number = 0;
            let departureDate: string = "";
            const arrivalDate: string = "-";
            const adultsCapacity: number = 1;
            const childrenCapacity: number = 0;
            let price: string = "";

            // get tour title
            const elementTitle: string | null = element.getAttribute("title");
            if (!elementTitle) {
                return;
            }

            tourTitle = elementTitle;

            // get tour link
            const hrefValue: string | null = element.getAttribute("href");

            if (!hrefValue || hrefValue === "#") {
                return;
            }

            tourLink = hrefValue;
            tourLink = JoinUp.BASE_URL + tourLink;

            // get tour image

            const tourImageElement: Element | null = element
                .querySelector(JoinUpHotTourPageParser.TOUR_IMAGE_CSS_LOCATOR);

            if (!tourImageElement) {
                return;
            }

            const tourImageElementStyle: string | null = tourImageElement.getAttribute("data-image");

            if (!tourImageElementStyle) {
                return;
            }

            tourImage = JoinUp.BASE_URL + tourImageElementStyle;

            // get country and resort

            const tourCountryElement: Element | null = element.querySelector("p.title");

            if (!tourCountryElement) {
                return;
            }

            const tourCountryElementText: string | null = tourCountryElement.textContent;

            if (!tourCountryElementText) {
                return;
            }

            tourCountry = tourCountryElementText.replace(/\t/g, " ");
            const countryAndResort: string[] = tourCountry.split("(");

            tourCountry = countryAndResort[0].trim();
            tourResort = countryAndResort[1].replace(")", "").trim();

            // get additional information
            const additionalInformationElement: Element | null = element.querySelector(".sec_title_02");

            if (!additionalInformationElement) {
                return;
            }

            const additionalInformationElementText: string | null = additionalInformationElement.textContent;

            if (!additionalInformationElementText) {
                return;
            }

            const additionalElementLines: string[] = additionalInformationElementText.split(",");
            departureDate = additionalElementLines[0].replace("из Киева", "").trim();
            duration = Number.parseInt(additionalElementLines[1].replace("ночей", "").trim(), 10);
            tourAccommodation = additionalElementLines[2].replace("питание", "").trim();

            // get price
            const priceElement: Element | null = element.querySelector(".price");

            if (!priceElement) {
                return;
            }

            const priceElementText: string | null = priceElement.textContent;

            if (!priceElementText) {
                console.log("fail");
                return;
            }

            price = priceElementText;

            hotTours.push({
                tourLink,
                title: tourTitle,
                imageSource: tourImage,
                resort: tourResort,
                accommodation: tourAccommodation,
                duration,
                departureDate,
                arrivalDate,
                adultsCapacity,
                childrenCapacity,
                country: tourCountry,
                price
            });
        });

        console.log(hotTours);

        return hotTours;
    }
}
