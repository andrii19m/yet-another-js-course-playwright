import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

const baseURL ='/auth/login';
// const email = 'customer@practicesoftwaretesting.com';
// const pass = 'welcome01';
const verifyURL ='/account';

test('Verify login with valid credentials', async ({ page }) => {
     test.skip(!!process.env.CI, 'Skipping on CI');
    const loginPage = new LoginPage;
    await page.goto(baseURL);
    await loginPage.performLogin(page);

    await expect(page).toHaveURL(verifyURL);
    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Jane Doe' })).toBeVisible();

});
