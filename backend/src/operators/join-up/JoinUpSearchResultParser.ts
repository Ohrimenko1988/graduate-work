import { ITour } from "../interfaces/ITour";

export class JoinUpSearchResultParser {
    public parse(document: Document): Promise<ITour[]> {
        document.querySelectorAll(".box").forEach((box: Element) => {
            let temporaryElement: Element | null;

            // hotel, stars and tour link
            temporaryElement = box.querySelector(".title_hotel_stars a");
            if (!temporaryElement) {
                console.log("fail");
                return;
            }

            console.log(temporaryElement.getAttribute("title"));
            console.log(temporaryElement.getAttribute("href"));

            // hotel and resort

            temporaryElement = box.querySelector(".title_loc_hotel");

            if (!temporaryElement) {
                return;
            }

            console.log(temporaryElement.textContent);

            // date of departure

            temporaryElement = box.querySelector(".flight_date strong");

            if (!temporaryElement) {
                return;
            }

            console.log(temporaryElement.textContent);

            // duration

            temporaryElement = box.querySelector(".tour_nights strong");

            if (!temporaryElement) {
                return;
            }

            console.log(temporaryElement.textContent);

            // price

            temporaryElement = box.querySelector(".price_search_tours");

            if (!temporaryElement) {
                return;
            }

            console.log(temporaryElement.textContent);

            // accomodation

            temporaryElement = box.querySelector(".title_room_accom_meal .meal");

            if (!temporaryElement) {
                return;
            }

            console.log(temporaryElement.textContent);
            console.log("\n\n==============\n\n");

        });

        return Promise.resolve(new Array<ITour>());
    }
}
