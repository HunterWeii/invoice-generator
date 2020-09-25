import { useReducer } from "react";
import {
  generateInvoicePage
} from "./invoice-item-generator";
import { invoiceItemReducer } from "./invoice-item-reducers";

export function useInvoiceItems() {
  const invoicePage = generateInvoicePage();
  const [
    invoicePageForm,
    invoicePageFormReducer
  ] = useReducer( invoiceItemReducer, invoicePage );

  return {
    invoicePageForm,
    invoicePageFormReducer
  }
}