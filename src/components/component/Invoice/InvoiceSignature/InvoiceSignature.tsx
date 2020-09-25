import React from 'react'
import TextBase from 'components/library/TextBase/TextBase';
import style from './invoiceSignature.module.scss';

export default function InvoiceSignature() {
  return (
    <div className={style.invoice_sign}>
      <TextBase textclass={ style.invoice_sign_textbox }>Authorised Signature</TextBase>
      <TextBase textclass={ style.invoice_sign_textbox }>Customer Sign &amp; Chop</TextBase>
    </div>
  )
}
