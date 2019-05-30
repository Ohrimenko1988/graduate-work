import { test, suite, after } from "mocha";
import { DriverUtil } from "../utils/DriverUtil";
import { MainPage } from "../pageobjects/MainPage";

const driverUtil: DriverUtil = new DriverUtil();
const mainPage: MainPage = new MainPage(driverUtil);

suite("E2E test", async () => {
    test("Check main page", async () => {
        await mainPage.openPage();
        await mainPage.waitSearchForm();
        await mainPage.waitHotTours();
    })

    after("Clear", async () => {
        await driverUtil.getDriver().quit();
    })
})


