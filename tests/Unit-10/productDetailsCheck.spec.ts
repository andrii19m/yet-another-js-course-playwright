import { test, expect } from '@playwright/test'
import { Header } from '../../fragments/HeaderFragment';
import { ProductDetailsPage } from '../../pages/homePage';


test('Verify user can view product details', async ({ page }) => {
    //go to home page
    const baseURL = '/';
    await page.goto(baseURL);

    //verify header is visible
    const header = new Header(page);
    await header.verifyHeader();

    //click on product
    const product = new ProductDetailsPage(page);
    await page.getByText(product.name).click();

    //check product page url
   await expect(page).toHaveURL(/.*\/product\/.+/);
    //check product name and price
    await expect(page.locator('[data-test="product-name"]').getByText(product.name)).toBeVisible();
    await expect(page.getByText(product.price.toString())).toBeVisible();
    //check add to cart button is visible
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    //check add to favorites button is visible
    await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();

});