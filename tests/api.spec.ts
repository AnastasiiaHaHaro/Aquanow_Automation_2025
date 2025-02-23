import { test, expect } from '../scr/fixture/api.fixtures';

test('Creating CJBankTestTransaction via API', async ({ responseData, status }) => {
  console.log('Response Data:', responseData);
  console.log('Response Status:', status);

  expect(status).toBe(200);
});
