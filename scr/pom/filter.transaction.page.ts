import { Page } from "@playwright/test";


export class BankingServicesPage{
    readonly page: Page;
    readonly bankingServicesHeader;
    readonly statusFieldFailure;
    readonly statusFieldPending;

    constructor(page: Page){
        this.page = page;
        this.bankingServicesHeader = this.page.locator('h2', { hasText: 'Banking Services' });

        this.statusFieldFailure = this.page.locator('[data-field="mapping_status"]').nth(1);
        this.statusFieldPending = this.page.locator('[data-field="mapping_status"]').nth(1);
    }

async navigateToBankingServices(transaction_id: string){
    await this.filterTransaction(transaction_id);
    await this.mapTransaction();
    await this.fillTransactionDetails();
}

async filterTransaction(transaction_id: string){
    await this.page.getByText('Shared Services').click();
    await this.page.getByText('Banking Services').click();
    await this.page.locator('.MuiDataGrid-toolbarContainer').locator('button[aria-label="Show filters"]').click();
    await this.page.locator('//button[text()="Remove all"]').click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('.MuiNativeSelect-select.MuiNativeSelect-standard').nth(1).selectOption({ value: 'tx_id' });
    await this.page.waitForTimeout(2000);
    await this.page.locator('input[placeholder="Filter value"]').fill(transaction_id);
    await this.page.waitForTimeout(2000);

    // await this.page.waitForSelector('//button[text()="Actions"]', { state: 'visible' }); 
    await this.page.locator('//button[text()="Actions"]').nth(0).click();
    await this.page.locator('//li[contains(text(),"Map Transaction")]').click();
}

async mapTransaction(){
    await this.page.locator('div[data-testid="PlatformName"] div:first-of-type').nth(0).click();
    await this.page.locator('//li[contains(text(),"Aquanow CLTS")]').click()
    await this.page.locator('div[data-testid="ClientUsername"] div:first-of-type').nth(0).click();
    await this.page.locator('//li[contains(text(),"bankingautomation")]').click()
    await this.page.locator('div[data-testid="ClientAccountId"] div:first-of-type').nth(0).click();
    await this.page.locator('//li[contains(text(),"CA1219962C")]').click()
    await this.page.locator('input[type="checkbox"]').click();

}

async fillTransactionDetails(){await this.page.waitForTimeout(2000);

    await this.page.locator('div[data-testid="ConditionField"] div:first-of-type').nth(2).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('//li[contains(text(),"Quantity")]').click()
    await this.page.locator('//button[text()="Map Transaction"]').click();
    await this.page.locator('//button[text()="Create"]').click();

}    
}
