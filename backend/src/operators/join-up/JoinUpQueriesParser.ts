import { Request } from "express";
import { ISearchParams } from "../interfaces/ISearchParams";

export class JoinUpQueriesParser {
    public parse(req: Request): ISearchParams {
        const adults: number = Number.parseInt(req.query.ADULTS, 10);
        const childres: number = Number.parseInt(req.query.CHILDREN, 10);
        const duration: number = Number.parseInt(req.query.DURATION, 10);

        return {
            accomodation: req.query.ACCOM,
            adultsCapacity: adults,
            childrenCapacity: childres,
            country: req.query.COUNTRY,
            dateOfDeparture: req.query.DEPARTURE,
            dateOfArrival: req.query.ARRIVAL,
            durationOfStay: duration,
            placeOfDeparture: req.query.DEPPLACE,
            resorts: req.query.RESORTS,
            stars: req.query.STARS
        };
    }

}
