import { Page } from "@playwright/test";
import { generateOtpCode } from '../../utils/otp.code';

// import { otpCode } from '../../tests/ui/ui.spec'

export class LoginPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    async loginWithCredentials(){
        
        await this.page.locator('input[name="_vercel_password"]').fill(process.env.VERCEL_PASSWORD!);
        await this.page.locator("//button[@class='submit']").click();

        // console.log("Loaded username:", process.env.USERNAME);
        await this.page.locator('input[placeholder="Enter your Username"]').fill("nastyagagaro@gmail.com");


        await this.page.getByPlaceholder("Enter your Password").fill(process.env.PASSWORD!);
        await this.page.locator('button[type="submit"]').click();
    }

    async enterOtp() {
        const otpCode = generateOtpCode(); 
        await this.page.locator('input[name="confirmation_code"]').waitFor({ state: 'visible' });
        await this.page.locator('input[name="confirmation_code"]').fill(otpCode);
        await this.page.locator('button[type="submit"]').click();
      }

}