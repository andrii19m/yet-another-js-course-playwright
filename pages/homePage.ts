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

export class ProductDetailsPage {
    page: Page;
    name: string;
    price: number;

    constructor(page: Page) {
        this.page = page;
        this.name = 'Combination Pliers';
        this.price = 14.15;
    }
}