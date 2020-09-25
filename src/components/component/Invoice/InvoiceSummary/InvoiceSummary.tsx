import React from 'react'
import classNames from 'classnames'
import TextBase from 'components/library/TextBase/TextBase'
import TitleText from 'components/library/TitleText/TitleText';
import style from './invoiceSummary.module.scss'

type InvoiceSummaryProps = { invoicePageItems : any }

export default function InvoiceSummary(props: InvoiceSummaryProps) {
  let pageTotal = props.invoicePageItems.reduce((prevSum: number, item:any) => item.amount + prevSum, 0);
  pageTotal = pageTotal.toFixed(2);

  return (
    <div className={style.invoice_summary} >
      <div className={style.invoice_summary_price}>
        <TextBase textclass={ style.invoice_summary_text }>RINGGIT MALAYSIA FOUR HUNDRED AND THIRTY NINE ONLY</TextBase>
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
      <TitleText
        containerclass={style.invoice_summary_mention}
        textclass={ style.invoice_summary_mention_text }  
        title="*"
      >
        Goods sold are neither returnable nor refundable.
        Otherwise a cancellation fee of 20% on purchase price will be imposed.
      </TitleText>
    </div>
  )
}
