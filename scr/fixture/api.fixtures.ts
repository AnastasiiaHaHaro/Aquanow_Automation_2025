import { test as base } from '@playwright/test';
import { ApiRequester } from '../apiRequester.mts';
import { requestData } from '../../utils/cjbankTestData';

const apiRequester = new ApiRequester('https://banking-service.dev.aquaservices.aquanow.io/cjbank/unsecuredWebhook/');

export const test = base.extend<{ 
  apiRequester: ApiRequester, 
  responseData: any, 
  status: number,
  transaction_id: string 
}>({


  apiRequester: async ({}, use) => {
    if (apiRequester) {
      await use(apiRequester);
    } else {
      throw new Error("apiRequester is not defined");
    }
  },

  responseData: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (responseData: any) => Promise<void>) => {  
    if (apiRequester) {
      const { responseData } = await apiRequester.createCJBankTestTransaction(requestData);
      await use(responseData);
    } else {
      throw new Error("apiRequester is not defined");
    }
  },

  status: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (status: number) => Promise<void>) => {  
    if (apiRequester) {
      const { status } = await apiRequester.createCJBankTestTransaction(requestData);
      await use(status);
    } else {
      throw new Error("apiRequester is not defined");
    }
  },

  transaction_id: async ({ apiRequester }: { apiRequester: ApiRequester }, use: (transaction_id: string) => Promise<void>) => {  
    if (apiRequester) {
      const response = await apiRequester.createCJBankTestTransaction(requestData);
      const transaction_id = response?.responseData?.transaction_id;
      console.log("Transaction ID from API:", transaction_id); 
      await use(transaction_id);  
    } else {
      throw new Error("apiRequester is not defined");
    }
  }
});

export { expect } from '@playwright/test';




