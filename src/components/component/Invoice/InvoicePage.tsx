import React from 'react'
import classNames from 'classnames';
import InvoiceHeader from './InvoiceHeader/InvoiceHeader'
import InvoiceCustomer from './InvoiceCustomer/InvoiceCustomer'
import InvoiceItem from './InvoiceItem/InvoiceItem';
import InvoiceSummary from './InvoiceSummary/InvoiceSummary';
import InvoiceSignature from './InvoiceSignature/InvoiceSignature';
import style from './invoicepage.module.scss';

type invoicePageProps = {
  customerForm ?: object 
  customerItems ?: Array<any>,
  invoicePageItems : any,
  invoiceType: any
}

export default function InvoicePage(props: invoicePageProps) {
  return (
    <section id="invoice_1" className={ classNames( 'invoice-page', style.a4_page) } >
      <InvoiceHeader />
      <InvoiceCustomer customerForm={ props.customerForm } />
      <InvoiceItem invoicePageItems={ props.invoicePageItems } />
      <InvoiceSummary invoicePageItems={ props.invoicePageItems } invoiceType={props.invoiceType}/>
      <InvoiceSignature />
    </section>
  )
}

InvoicePage.defaultProps = {
  customerForm: {},
  customerItems: []
}