import { test as base } from '@playwright/test';
import { ApiRequester } from '../apiRequester.mjs';
import { requestData } from '../../utils/cjbankTestData';

const apiRequester = new ApiRequester('https://banking-service.dev.aquaservices.aquanow.io/cjbank/unsecuredWebhook/');

export const test = base.extend<{ 
  apiRequester: ApiRequester, 
  sentData: any, 
  responseData: any, 
  status: number,
  transaction_id: string 
}>({
  apiRequester: async ({}, use: (arg: ApiRequester) => Promise<void>) => {
    await use(apiRequester);
  },

  sentData: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (arg: any) => Promise<void>) => {
    const { requestData: sentData } = await apiRequester.createCJBankTestTransaction(requestData);
    await use(sentData);
  },

  responseData: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (arg: any) => Promise<void>) => {
    const { responseData } = await apiRequester.createCJBankTestTransaction(requestData);
    await use(responseData);
  },

  status: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (arg: number) => Promise<void>) => {
    const { status } = await apiRequester.createCJBankTestTransaction(requestData);
    await use(status);
  },

  transaction_id: async ({ apiRequester }, use) => {
    const { responseData } = await apiRequester.createCJBankTestTransaction(requestData);
    const transaction_id = responseData.orderReference; 
    console.log("Transaction ID:", transaction_id);
    await use(transaction_id);
  }
});


export { expect } from '@playwright/test';



