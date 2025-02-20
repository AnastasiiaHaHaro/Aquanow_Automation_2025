import { test, expect } from '@playwright/test';
import { LoginPage } from '../../scr/pom/login.page';
import dotenv from 'dotenv';
import { generateOtpCode } from '../../utils/otp.code'
import { NewTransaction } from '../../scr/pom/new.transfer.page';

// import { execSync } from 'child_process';

let otpCode: string;

dotenv.config();
// console.log(process.env.KEY);

test.beforeEach(async({page})=> {
  await page.goto('https://admin-dev.aquanow.io')

  const loginPage = new LoginPage(page);
  await loginPage.loginWithCredentials();

  otpCode = generateOtpCode();
  await loginPage.enterOtp();
  await expect(page).toHaveURL(/dashboard/);
});

test('Finding Transaction', async ({ page }) => {
  
   await expect(page).toHaveTitle('Banking Services');

   const findTransaction = new NewTransaction(page);
  //  await findTransaction.newTransaction(transaction_id);

  await page.pause();

});
