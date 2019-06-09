import { test, suite } from "mocha";
import fs from "fs";
import { expect } from "chai";
import { JSDOM } from "jsdom";
import { ITour } from "../../operators/interfaces/ITour";
import { JoinUpSearchResultParser } from "../../operators/join-up/JoinUpSearchResultParser";
import { ISearchParams } from "../../operators/interfaces/ISearchParams";
import { JoinUpHotTourPageParser } from "../../operators/join-up/JoinUpHotTourPageParser";
import { JoinUpSearchInvoker } from "../../operators/join-up/JoinUpSearchInvoker";

suite("JoinUp unit tests", async () => {
    test("Should parse search response", async () => {
        const params: ISearchParams = {
            accomodation: ["UAI", "AI", "FB", "BB", "RO"],
            adultsCapacity: 2,
            childrenCapacity: 0,
            country: "Єгипет",
            dateOfDeparture: "23.07.2019",
            dateOfArrival: "30.07.2019",
            durationOfStay: 6,
            placeOfDeparture: "Київ",
            resorts: ["Хургада", "Шарм ель Шейх"],
            stars: ["5"]
        };
        const searchResposeContent: string = fs.readFileSync("src/tests/unit/files/joinup-search-respose.html", "utf8");
        const respDocument: Document = new JSDOM(searchResposeContent).window.document;

        const tours: ITour[] = await new JoinUpSearchResultParser().parse(respDocument, params);
        expect(tours.length).to.be.equal(6);
    });

    test("Should parse hot tours response", async () => {
        const hotToursResposeContent: string = fs.readFileSync("src/tests/unit/files/joinup-hotours-response.html", "utf8");
        const respDocument: Document = new JSDOM(hotToursResposeContent).window.document;

        const hotTours: ITour[] = await new JoinUpHotTourPageParser().parseDocument(respDocument);
        expect(hotTours.length).to.be.equal(7);
    });

    test("Should create valid search tours request URL", async () => {
        const searchParams: ISearchParams = {
            accomodation: ["UAI", "AI", "FB", "BB", "RO"],
            adultsCapacity: 2,
            childrenCapacity: 0,
            country: "Єгипет",
            dateOfDeparture: "23.07.2019",
            dateOfArrival: "30.07.2019",
            durationOfStay: 6,
            placeOfDeparture: "Київ",
            resorts: ["Хургада", "Шарм ель Шейх"],
            stars: ["5"]
        };

        const expectedRequestUrl: string = "https://joinup.ua/search_tour.php?ACTION=SearchTour_PRICES&TOWNFROMINC=18" +
            "&ADULT=2&CHILD=0&CHILD_AGE=&CHECKIN_BEG=23.07.2019&CHECKIN_END=30.07.2019&STATEINC=9" +
            "&NIGHTS_FROM=6&NIGHTS_TILL=6&PACKET=0&PRICE_MIN=&PRICE_MAX=&CURRENCY=4&CURRENCY_CODE=UAH" +
            "&PER_PAGE=0&TOWNTO=[16,1316,1314,1317,1326,1315,1313,1318,17,1360,1347,1843,2380,1841,1844,1845,1846,1850,1840,1839,1849]" +
            "&TOWNTO_ANY=0&STARS=[10004]&STARS_ANY=0&HOTELS=[]&HOTELS_ANY=1&MEALS=[10023,10011,10010,10001,10020]" +
            "&FREIGHT=0&FILTER=1&CAPTCHA=&language=ru&_=1559234741044";

        const requestUrl: string = new JoinUpSearchInvoker().createRequestUrlWithQueries(searchParams);
        expect(expectedRequestUrl).to.be.equal(requestUrl);
    });

});
