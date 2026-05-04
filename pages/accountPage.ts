import { Page, Locator } from "@playwright/test";
export class AccountPage {
    page: Page;
    myAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccount = page.locator('[data-test="page-title"]');
    }
}