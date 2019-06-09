import express from "express";
import { ITour } from "./operators/interfaces/ITour";
import { JoinUp } from "./operators/join-up/JoinUp";
import { OperatorsRegistry } from "./OperatorsRegistry";
import { ISearchParams } from "./operators/interfaces/ISearchParams";
import { JoinUpQueriesParser } from "./operators/join-up/JoinUpQueriesParser";
const app = express();
const port = 8080;

const operatorsRegistry = new OperatorsRegistry();
let hotToursResult: ITour[];

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.send(`Server works correctly`);
});

app.get("/hot-tours", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    if (hotToursResult) {
        res.send(hotToursResult);
    }

    if (!hotToursResult) {
        operatorsRegistry.getHotTours()
            .then((resp) => {
                hotToursResult = resp;
            })
            .then(() => {
                res.send(hotToursResult);
            });
    }
});

app.get("/search", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    const params: ISearchParams = new JoinUpQueriesParser().parse(req);
    const tours: ITour[] = await operatorsRegistry.searchTours(params);

    res.send(tours);
});

// start the Express server
app.listen(port, async () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);

    hotToursResult = await operatorsRegistry.getHotTours();
});
