import React from 'react'
import InvoicePage from 'components/component/Invoice/InvoicePage';

type invoiceViewerProps = {
  invoiceType: any
  customerForm: any,
  invoicePageItems: any
}

export default function InvoiceViewer(props: invoiceViewerProps) {  
  return (
    <InvoicePage 
      invoiceType={props.invoiceType}
      customerForm={ props.customerForm } 
      invoicePageItems={ props.invoicePageItems }
    />
  )
}