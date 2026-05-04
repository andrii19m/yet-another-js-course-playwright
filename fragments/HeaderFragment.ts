import { Page, Locator, expect } from '@playwright/test'

export class Header {
    page: Page;
    home: Locator;
    categories: Locator;
    contact: Locator;
    signIn: Locator;
    languageSelect: Locator;

    constructor(page: Page) {
        this.page = page;
          this.home = page.getByTestId('nav-home');
        this.categories = page.getByTestId('nav-categories');
        this.contact = page.getByTestId('nav-contact');
        this.signIn = page.getByTestId('nav-sign-in');
        this.languageSelect = page.getByTestId('language-select');
    }

    async verifyHeader(): Promise<void> {
        await expect(this.home).toBeVisible();
        await expect(this.categories).toBeVisible();
        await expect(this.contact).toBeVisible();
        await expect(this.signIn).toBeVisible();
        await expect(this.languageSelect).toBeVisible();
    }
}