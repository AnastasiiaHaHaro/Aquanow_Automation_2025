import { test, expect } from '../../scr/fixture/api.fixtures';
import { LoginPage } from '../../scr/pom/login.page';
import dotenv from 'dotenv';
import { generateOtpCode } from '../../utils/otp.code'
import { BankingServicesPage } from '../../scr/pom/filter.transaction.page';
import { ApiRequester } from '../../scr/apiRequester.mts';



let otpCode: string;
const apiRequester = new ApiRequester('https://banking-service.dev.aquaservices.aquanow.io/cjbank/unsecuredWebhook/');

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

test('Sorting Transaction', async ({ page, transaction_id  }) => {
  console.log('Transaction ID:', transaction_id);

  const bankingServicesPage = new BankingServicesPage(page);
  await bankingServicesPage.filterTransaction(transaction_id);
  await bankingServicesPage.mapTransaction();
  await bankingServicesPage.fillTransactionDetails();

  
  await expect(bankingServicesPage.bankingServicesHeader).toHaveText('Banking Services');
  await expect(bankingServicesPage.statusFieldFailure).toContainText('Failure');
  await expect(bankingServicesPage.statusFieldPending).toContainText('Review Pending');

});



