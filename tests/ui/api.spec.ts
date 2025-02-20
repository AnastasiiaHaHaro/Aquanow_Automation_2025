import { test, expect } from '../../scr/fixture/api.fixtures';

test('Creating CJBankTestTransaction via API', async ({ sentData, responseData, status }) => {
  console.log('Request Data:', sentData);
  console.log('Response Data:', responseData);
  console.log('Response Status:', status);

  expect(status).toBe(200);
});
