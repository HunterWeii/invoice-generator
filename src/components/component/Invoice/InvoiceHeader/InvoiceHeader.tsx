import React from 'react'
import logo from 'assets/risetron-logo.png';
import TextBase from 'components/library/TextBase/TextBase';
import style from './invoiceHeader.module.scss';

export default function InvoiceHeader() {
  return (
    <div className={style.invoice_header}>
      <img src={ logo } alt="company-logo" className={style.invoice_header_img} />
      <TextBase textclass={ style.invoice_header_title }>
        Risetron Technology
        <TextBase textclass={ style.invoice_header_title_code }>(CA0305296-D)</TextBase>
      </TextBase>
      <TextBase textclass={ style.invoice_header_text }>
        347, LRG PERDANA 1/9, BANDAR PERDANA
      </TextBase>
      <TextBase textclass={ style.invoice_header_text }>
        08000 SUNGAI PETANI KEDAH
      </TextBase>
      <TextBase textclass={ style.invoice_header_text }>
        Tel: 010 7759560
      </TextBase>
    </div>
  )
}
