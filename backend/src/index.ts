import express from "express";
import { IOperator } from "./operators/interfaces/IOperator";
import { ITour } from "./operators/interfaces/ITour";
import { JoinUp } from "./operators/join-up/JoinUp";
import { JoinUpSearchInvoker } from "./operators/join-up/JoinUpSearchInvoker";
import { OperatorsRegistry } from "./OperatorsRegistry";
import { ISearchParams } from "./operators/interfaces/ISearchParams";
import { JoinUpQueriesParser } from "./operators/join-up/JoinUpQueriesParser";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
const operatorsRegistry = new OperatorsRegistry();
const joinUp: JoinUp = new JoinUp();
let hotToursResult: ITour[];
// let searcResult: ITour[];

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // res.header 'Access-Control-Allow-Origin', '*'
    // res.header 'Access-Control-Allow-Credentials', true
    // res.header 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'
    // res.header 'Access-Control-Allow-Headers', 'Content-Type'

    res.send(`query: 1) ${req.query.message} 2) ${req.query.secondMessage}`);
});

app.get("/hot-tours", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (hotToursResult) {
        res.send(hotToursResult);
    }

    if (!hotToursResult) {
        joinUp.getHotTours()
            .then((resp) => {
                hotToursResult = resp;
            })
            .then(() => {
                res.send(hotToursResult);
            });
    }
});

app.get("/search", (req, res) => {
    operatorsRegistry.get().map((operator: IOperator) => {
        const params: ISearchParams = new JoinUpQueriesParser().parse(req);
        console.log(params);
        new JoinUpSearchInvoker().search(params)
            .then((tours: ITour[]) => {
                res.send(tours);
            });
    });
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);

    const searchParams: ISearchParams = {
        accomodation: ["AI"],
        adultsCapacity: 2,
        childrenCapacity: 0,
        country: "Египет",
        dateOfDeparture: "15.05.2019",
        dateOfArrival: "22.05.2019",
        durationOfStay: 6,
        placeOfDeparture: "Kyiv",
        resorts: ["Хургада"],
        stars: ["4", "5"]
    };
    // new JoinUpSearchInvoker().search(searchParams);

    // if (!hotToursResult) {
    //     joinUp.getHotTours()
    //         .then((resp) => {
    //             hotToursResult = resp;
    //         });
    // }

    // joinUp.getHotToursPage(joinUp.getInnerHtml);
    // joinUp.getHotToursPage(joinUp.parseDocument);
});
