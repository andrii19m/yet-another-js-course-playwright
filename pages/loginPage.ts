import {Page} from '@playwright/test'
export class LoginPage {
    async performLogin (page: Page):Promise<void> {
    const email = 'customer@practicesoftwaretesting.com';
    const pass = 'welcome01';
    await page.getByPlaceholder('Your email').fill(email);
    await page.getByPlaceholder('Your password').fill(pass);
    await page.getByRole('button', { name: /Login/i }).click();
    }
 
}