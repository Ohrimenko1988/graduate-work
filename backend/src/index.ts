import express from "express";
import { IOperator } from "./operators/interfaces/IOperator";
import { ITour } from "./operators/interfaces/ITour";
import { JoinUp } from "./operators/join-up/JoinUp";
import { OperatorsRegistry } from "./OperatorsRegistry";
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

// app.get("/search", async (req, res) => {
//     operatorsRegistry.get().map((operator: IOperator) => {
//         operator.searchTours(searcResult);
//     });
// });

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);

    if (!hotToursResult) {
        joinUp.getHotTours()
            .then((resp) => {
                hotToursResult = resp;
            });
    }

    // joinUp.getHotToursPage(joinUp.getInnerHtml);
    // joinUp.getHotToursPage(joinUp.parseDocument);
});
