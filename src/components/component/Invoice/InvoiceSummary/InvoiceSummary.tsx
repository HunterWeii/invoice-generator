import React from 'react'
import classNames from 'classnames'
import TextBase from 'components/library/TextBase/TextBase'
import TitleText from 'components/library/TitleText/TitleText';
import style from './invoiceSummary.module.scss'
import numToWords from 'library/numToWords';
import InvoiceNote from "./InvoiceNote";
import QuotationNote from "./QuotationNote";

type InvoiceSummaryProps = { invoicePageItems : any, invoiceType: any }

export default function InvoiceSummary(props: InvoiceSummaryProps) {
  let pageTotal = props.invoicePageItems.reduce((prevSum: number, item:any) => {
    const { qty, discount, unitPrice } = item;
    const itemDiscount = parseFloat(discount) === 0 ? 1 : parseFloat(discount); 
    const itemAmount = parseFloat(unitPrice) * parseFloat(qty) * itemDiscount;

    return itemAmount + prevSum;
  }, 0);
  const pageTotalInWords = numToWords(pageTotal);
  pageTotal = pageTotal.toFixed(2);

  return (
    <div className={style.invoice_summary} >
      <div className={style.invoice_summary_price}>
  <TextBase textclass={ style.invoice_summary_text }>RINGGIT MALAYSIA { pageTotalInWords }</TextBase>
        <div className={style.invoice_summary_total}>
          <div>
            <TitleText 
              titleclass={ style.invoice_summary_total_title }
              textclass={ style.invoice_summary_total_text }
              title="B/F Pages Total"></TitleText>
            <TitleText 
              titleclass={ style.invoice_summary_total_title }
              textclass={ style.invoice_summary_total_text }
              title="Page Total"
            >
              { pageTotal }
            </TitleText>
            <TitleText 
              titleclass={ classNames(style.invoice_summary_total_title, style.invoice_summary_total_text_mention) }
              textclass={ classNames(style.invoice_summary_total_text, style.invoice_summary_total_box) }
              title="Total"
            >
              { pageTotal }
            </TitleText>
          </div>
        </div>
      </div>
      {
        props.invoiceType === 'invoice' ? <InvoiceNote /> : <QuotationNote />
      }
    </div>
  )
}
