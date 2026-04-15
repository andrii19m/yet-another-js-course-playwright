import { test, expect } from '@playwright/test';

const baseURL ='/auth/login';
const email = 'customer@practicesoftwaretesting.com';
const pass = 'welcome01';
const verifyURL ='/account';

test('Verify login with valid credentials', async ({ page }) => {
    await page.goto(baseURL);
    await page.getByPlaceholder('Your email').fill(email);
    await page.getByPlaceholder('Your password').fill(pass);
    await page.getByRole('button', { name: /Login/i }).click();
    await expect(page).toHaveURL(verifyURL);
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Jane Doe' })).toBeVisible();

});
