import { Driver } from "../Driver";
import { By, WebElement, ThenableWebDriver, until, error } from "selenium-webdriver";

export class DriverUtil{
    private readonly driver: ThenableWebDriver;

    constructor(private readonly chromeDriver: Driver = new Driver){
        this.driver = chromeDriver.get();
    }

    getDriver(): ThenableWebDriver {
        return this.driver;
    }

    public async waitVisibility(elementLocator: By, timeout = 20000): Promise<WebElement> {
            for (let i = 0; i < 5; i++) {
            const webElement: WebElement = await this.driver.wait(until.elementLocated(elementLocator), timeout)

            try {
                const visibleWebElement = await this.driver.wait(until.elementIsVisible(webElement), timeout)
                return visibleWebElement
            } catch (err) {
                if (err instanceof error.StaleElementReferenceError) {
                    continue;
                }

                throw err;
            }
        }

        throw new Error('Fail of visibility waiting');
    }

}
