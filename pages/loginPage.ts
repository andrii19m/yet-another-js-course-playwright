import {Page} from '@playwright/test'
export class LoginPage {
    async performLogin (page: Page):Promise<void> {
   const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
};
    await page.getByPlaceholder('Your email').fill(user.email);
    await page.getByPlaceholder('Your password').fill(user.password);
    await page.getByRole('button', { name: /Login/i }).click();
    }
 
}