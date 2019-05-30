import { test, suite } from "mocha";
import fs from "fs";
import { expect } from "chai";
import { ITour } from "../../operators/interfaces/ITour";
import { OperatorsRegistry } from "../../OperatorsRegistry";
import { ISearchParams } from "../../operators/interfaces/ISearchParams";

const operatorsRegistry: OperatorsRegistry = new OperatorsRegistry();

suite("Integration tests", async () => {
    test.skip("Should perform hot tours search", async () => {
        const hotTours: ITour[] = await operatorsRegistry.getHotTours();

        expect(hotTours.length).to.be.above(0);
    });

    test("Should perform tours search", async () => {
        const searchDate: ISearchDate = getSearchDate();
        const searchParams: ISearchParams = {
            accomodation: ["UAI", "AI", "FB", "BB", "RO"],
            adultsCapacity: 2,
            childrenCapacity: 0,
            country: "Єгипет",
            dateOfDeparture: searchDate.departureDate,
            dateOfArrival: searchDate.arrivalDate,
            durationOfStay: 6,
            placeOfDeparture: "Київ",
            resorts: ["Хургада", "Шарм ель Шейх"],
            stars: ["5"]
        };

        const tours = await operatorsRegistry.searchTours(searchParams);
        expect(tours.length).to.be.above(0);
    });

});

function getSearchDate(): ISearchDate {
    const currentDate: Date = new Date();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentYear: number = currentDate.getFullYear();

    return {
        departureDate: getDepartureDate(currentMonth, currentYear),
        arrivalDate: getArrivalDate(currentMonth, currentYear)
    };
}

function getDepartureDate(month: number, year: number): string {
    const day: number = 15;

    if (month + 1 > 12) {
        month = 1;
        year += 1;

        return createDate(day, month, year);
    }

    month = month + 1;
    return createDate(day, month, year);
}

function getArrivalDate(month: number, year: number): string {
    const day: number = 22;

    if (month + 1 > 12) {
        month = 1;
        year += 1;

        return createDate(day, month, year);
    }

    month = month + 1;
    return createDate(day, month, year);
}

function createDate(day: number, month: number, year: number): string {
    let convertedDay: string = "" + day;
    let convertedMonth: string = "" + month;
    const convertedYear: string = "" + year;

    if (day < 10) {
        convertedDay = `0${day}`;
    }

    if (month < 10) {
        convertedMonth = `0${month}`;
    }

    return `${convertedDay}.${convertedMonth}.${convertedYear}`;
}

interface ISearchDate {
    departureDate: string;
    arrivalDate: string;
}
