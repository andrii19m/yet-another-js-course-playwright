import { Page } from '@playwright/test'
import { users } from '../test-data/users'

export class LoginPage {
  async performLogin(page: Page): Promise<void> {
    await page.getByPlaceholder('Your email').fill(users.standard.email);
    await page.getByPlaceholder('Your password').fill(users.standard.password);
    await page.getByRole('button', { name: /Login/i }).click();
  }
}