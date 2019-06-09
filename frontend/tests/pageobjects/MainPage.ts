import { DriverUtil } from "../utils/DriverUtil";
import { By } from "selenium-webdriver";
import { Constants } from "../Constants";

export class MainPage{
    constructor(private readonly driverUtil: DriverUtil){}

    async openPage(){
        await this.driverUtil.getDriver().navigate().to(Constants.BASE_URL);
    }

    async waitSearchForm(){
        const searchFormLocator: By = By.css('.search-form');
        await this.driverUtil.waitVisibility(searchFormLocator);
    }

    async waitHotTours(){
        const hotTourLocator: By = By.css('.tour-list-item');
        await this.driverUtil.waitVisibility(hotTourLocator, 80000);
    }

}
