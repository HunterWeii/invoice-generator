interface IInvoiceItem {
  itemIndex: number | string,
  description: string
  qty: number,
  unitPrice: number,
  discount: number,
  amount: number
}

export const generateInvoiceItem = (): IInvoiceItem => ({
  itemIndex: 1,
  description: 'item 1 testing',
  qty: 1,
  unitPrice: 0.00,
  discount: 0,
  amount: 0.00
});

export const generateInvoicePage = ():Array<IInvoiceItem> => [ generateInvoiceItem() ];