import { ISearchParams } from "./common/interfaces/ISearchParams";

export class ParamsToQueriesConverter {
    public static parse(params: ISearchParams): string {
        let result: string = "?";

        // parse accomodation
        params.accomodation.map(accomodation => {
            result += `ACCOM[]=${accomodation}&`
        })

        // parse adults capacity
        result += `ADULTS=${params.adultsCapacity}&`

        // parse children capacity
        result += `CHILDREN=${params.childrenCapacity}&`

        // parse duration
        result += `DURATION=${params.durationOfStay}&`

        // parse departure date
        result += `DEPARTURE=${params.dateOfDeparture}&`

        // parse arrival date
        result += `ARRIVAL=${params.dateOfArrival}&`

        // parse place of departure
        result += `DEPPLACE=${params.placeOfDeparture}&`

        // parse resorts
        params.resorts.map(resort => {
            result += `RESORTS[]=${resort}&`
        })

        // parse stars
        params.stars.map(star => {
            result += `STARS[]=${star}&`
        })

        // parse country
        result += `COUNTRY=${params.country}`

        return result;
    }

}
