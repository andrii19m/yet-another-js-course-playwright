import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailsPage {
    page: Page;
    name: string;
    price: number;

 
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly addToFavoritesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = 'Combination Pliers';
        this.price = 14.15;

    
        this.productName = page.locator('[data-test="product-name"]');
        this.productPrice = page.getByText(this.price.toString());
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.addToFavoritesButton = page.locator('[data-test="add-to-favorites"]');
    }

   
    async verifyProductDetails() {
        await expect(this.productName.getByText(this.name)).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
        await expect(this.addToFavoritesButton).toBeVisible();
    }
}