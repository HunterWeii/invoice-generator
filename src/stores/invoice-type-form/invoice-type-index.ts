import { useReducer } from "react";

function invoiceTypeReducer(state:any, action: any) {
  switch(action.type) {
    case 'update':
      const { type } = action.payload; 
      return { type }
    default: 
      return  { ...state }
  }
}

export function useInvoiceTypeItems() {
  const [
    invoiceTypeForm,
    dispatchInvoiceType
  ] = useReducer( invoiceTypeReducer, { type: 'invoice' } );

  return {
    invoiceTypeForm,
    dispatchInvoiceType
  }
}