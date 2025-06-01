import { Page, Locator } from '@playwright/test';
import { Configuration } from '../config/configuration';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
   * Navigates to a given URL or path.
   * 
   * - If no URL is provided, navigates to the BASE_URL from the config.
   * - If provided URL starts with 'http', navigates directly to it.
   * - If provided URL didnt starts with 'http', appends it to the BASE_URL.
   * 
   * @param url Optional full URL or relative path to navigate to
   */
    async goTo(url?: string): Promise<void> {
    const baseUrl = Configuration.getBaseUrl();

    if (!url) {
      await this.page.goto(baseUrl); 
    } else if (url.startsWith('http')) {
      await this.page.goto(url); 
    } else {
      await this.page.goto(`${baseUrl}${url}`); 
    }
  }

    protected async safeClick(locator: Locator, description: string): Promise<void> {
    if (await locator.isVisible()) {
      await locator.click();
      console.log(`Clicked on: ${description}`);
    } else {
      console.warn(`'${description}' is not visible and was not clicked.`);
    }
  }

}
