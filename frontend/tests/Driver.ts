import 'chromedriver';
import { ThenableWebDriver, Builder } from "selenium-webdriver";
import { Options } from 'selenium-webdriver/chrome';

export class Driver {
    private readonly driver: ThenableWebDriver;

    constructor() {
        let options: Options = new Options()
            .addArguments("--allow-running-insecure-content")
            .addArguments("--disable-web-security")
            .addArguments('--no-sandbox');

        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }

    get(): ThenableWebDriver {
        return this.driver;
    }

}
