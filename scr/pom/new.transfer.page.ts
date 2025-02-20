import { Page } from "@playwright/test";


export class NewTransaction{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

async newTransaction(transaction_id: string){
    await this.page.getByText('Shared Services').click();
    await this.page.getByText('Banking Services').click();

    await this.page.locator('button[type="button"][aria-label="Show filters"]').click();
    await this.page.locator(`//button[contains(@fdprocessedid, '${"7ps76"}')]`).click();
    await this.page.locator(`//select[@id='re:']/option[@value='tx_id']`).click();

    

}
}