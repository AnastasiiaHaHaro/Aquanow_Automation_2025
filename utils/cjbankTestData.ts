import { randomUUID } from 'crypto';

export const requestData = {
    clientOrder: "9c6eb309-a145-478d-91b5-fc4082c1a440",
    orderReference: randomUUID(),
    operTimestamp: new Date().toISOString(),
    valuedAt: new Date().toISOString(),
    amount: "2.22",
    currency: "GBP",
    operationAmount: 0,
    operationCurrency: "GBP",
    productName: "deprecated",
    siteAddress: null,
    label: null,
    messages: [],
    customInfo: {},
    customFormat: {},
    status: "captured",
    returned: false,
    subStatuses: {
      operStatus: "captured",
      "": "clean"
    },
    payer: {
      address: {
        addressOnestring: "123 Sesame Street, Apt 3A, Springfield, IL"
      }
    },
    payee: {
      clientCustomerId: "",
      walletUuid: "97d41a59-4431-4a9e-b92b-1b23223b7cca"
    },
    paymentDetails: {
      paymentMethod: "BankTransferFps",
      description: "bankingautomation",
      payeeRequisite: {
        iban: "GBXXCLJU04130729902034",
        sortCode: "041307",
        name: "Clts Technologies Ltd",
        accountNumber: "29902034"
      },
      payerRequisite: {
        iban: "ES9121000418450200051332",
        sortCode: "184502",
        name: "John Doe",
        accountNumber: "00051332"
      },
      crossScheme: false
    },
    transactionType: "Payin",
    messageUuid: randomUUID(),
    type: "payinNotification"
  };
  