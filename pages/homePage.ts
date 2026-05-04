import { Page } from '@playwright/test';
import { Header } from '../fragments/HeaderFragment';

export class HomePage {
    page: Page;
    header: Header;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
    }

    async verifyHeader(): Promise<void> {
        await this.header.verifyHeader();
    }
}