import { test, expect } from '../../scr/fixture/api.fixtures';

test('Creating CJBankTestTransaction via API', async ({ sentData, responseData, status }) => {
  console.log('Request Data:', sentData);
  console.log('Response Data:', responseData);
  console.log('Response Status:', status);

  expect(status).toBe(200);
});

// test('Creating MappingRule via API', async ({request }) =>{
//   const response = await request.get('https://adminapi-dev.aquanow.io/users/bankingServices/transaction/getTransaction?page=1&per_page=20&filter=%7B%22tx_id%22%3A%5B%225764368c-1186-42fb-8b29-79dee89b69bc%22%5D%7D');
//   // headers: { 'Content-Type': 'application/json' },
// console.log("MY", response)
// });

// https://banking-service.dev.aquaservices.aquanow.io/mappingRule

// // "downstream_id": "1adf8bd6-0e02-4e8b-a70b-eba1ae5db9eb",