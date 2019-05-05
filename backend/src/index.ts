import express from "express";
import { JoinUp } from "./operators/JoinUp";
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page

const joinUp = new JoinUp();

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // res.header 'Access-Control-Allow-Origin', '*'
    // res.header 'Access-Control-Allow-Credentials', true
    // res.header 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'
    // res.header 'Access-Control-Allow-Headers', 'Content-Type'

    // res.json({
    //     myRespText: "Hello world!"
    // });

    res.send(`query: 1) ${req.query.message} 2) ${req.query.secondMessage}`);
});

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);

    joinUp.parseHtml();
});
