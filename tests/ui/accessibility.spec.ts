import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LoginPage } from '../../scr/pom/login.page';

test('Check accessibility after login', async ({ page }) => {
    await page.goto('https://admin-dev.aquanow.io');

    const loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials();
    await loginPage.enterOtp();
    await page.waitForURL(/dashboard/);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toHaveLength(3);

    const header = page.locator('header');
    await expect(header).toContainText('DEVELOPMENT');
});






