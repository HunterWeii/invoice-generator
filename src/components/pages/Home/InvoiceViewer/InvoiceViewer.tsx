import React from 'react'
import InvoicePage from 'components/component/Invoice/InvoicePage';

type invoiceViewerProps = {
  customerForm: any,
  invoicePageItems: any
}

export default function InvoiceViewer(props: invoiceViewerProps) {  
  return (
    <InvoicePage 
      customerForm={ props.customerForm } 
      invoicePageItems={ props.invoicePageItems }
    />
  )
}