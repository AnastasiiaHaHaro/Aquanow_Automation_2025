
import axios from 'axios';

export class ApiRequester {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async createCJBankTestTransaction(data: any) {
    try {
      const response = await axios.post(`${this.baseUrl}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return {
        requestData: data,
        responseData: { ...response.data, transaction_id: data.orderReference },
        status: response.status,
      };
    } catch (error: any) {
      console.error('Error creating transaction:', error.response?.data || error.message);
      throw error;
    }
  }
}
