import React from 'react'
import classNames from 'classnames'
import TextBase from 'components/library/TextBase/TextBase';
import TitleText from 'components/library/TitleText/TitleText';
import style from './invoiceCustomer.module.scss';

type invoiceCustomerProps = {
  customerForm: any
}

export default function InvoiceCustomer(props: invoiceCustomerProps) {
  const {
    customerName,
    customerAddress1,
    customerAddress2,
    customerTel,
    customerInvoice,
    customerTerm,
    customerInvoiceDate
  } = props.customerForm;

  return (
    <div className={ style.invoice_customer }>
      <div className={ style.invoice_customer_cardLeft }>
        <TitleText
          containerclass={ style.invoice_customer_visible }
          titleclass={ style.invoice_customer_textBlock_title }
          textclass={ style.invoice_customer_textBlock_textTitle }
          title=""> INVOICE</TitleText>
        <TextBase textclass={ classNames(style.invoice_customer_text, style.invoice_customer_text_name) }>
          { customerName }
        </TextBase>
        <TextBase textclass={ style.invoice_customer_text }>
          { customerAddress1 }
        </TextBase>
        <TextBase textclass={ style.invoice_customer_text }>
          { customerAddress2 }
        </TextBase>
        <TextBase textclass={ style.invoice_customer_text }>
          Tel: { customerTel }
        </TextBase>
      </div>
      <div className={ style.invoice_customer_cardRight }>
        <TitleText
          containerclass={ style.invoice_customer_textBlock }
          titleclass={ style.invoice_customer_textBlock_title }
          textclass={ style.invoice_customer_textBlock_textTitle }
          title="">INVOICE</TitleText>
        <TitleText
          containerclass={ style.invoice_customer_textBlock }
          titleclass={ classNames(style.invoice_customer_textBlock_title, style.invoice_customer_textBlock_title_bold) }
          textclass={  classNames(style.invoice_customer_textBlock_text, style.invoice_customer_textBlock_text_bold) }
          title="Invoice"
          center=":">
            { customerInvoice }
          </TitleText>
        <TitleText
          containerclass={ style.invoice_customer_textBlock }
          titleclass={ style.invoice_customer_textBlock_title }
          textclass={ style.invoice_customer_textBlock_text }
          title="Terms"
          center=":">
            { customerTerm }
          </TitleText>
        <TitleText
          containerclass={ style.invoice_customer_textBlock }
          titleclass={ style.invoice_customer_textBlock_title }
          textclass={ style.invoice_customer_textBlock_text }
          title="Date"
          center=":">
            { customerInvoiceDate }
          </TitleText>
        <TitleText
          containerclass={ style.invoice_customer_textBlock }
          titleclass={ style.invoice_customer_textBlock_title }
          textclass={ style.invoice_customer_textBlock_text }
          title="Page"
          center=":">1</TitleText>
      </div>
    </div>
  )
}
