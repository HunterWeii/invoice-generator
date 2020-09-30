import React from 'react'
import classNames from 'classnames'
import TextBase from 'components/library/TextBase/TextBase'
import TitleText from 'components/library/TitleText/TitleText';
import style from './invoiceSummary.module.scss'
import numToWords from 'library/numToWords';

type InvoiceSummaryProps = { invoicePageItems : any }

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
      <div>
        <TextBase textclass={ style.noteText }>Notes:</TextBase>
        <TextBase textclass={ style.noteText }>1. Goods sold are not returnable.</TextBase>
        <TextBase textclass={ style.noteText }>2. All goods sold shall still remain as the property of 'Risetron Technology Solutions' until full payment is made.</TextBase>
        <TextBase textclass={ style.noteText }>3. Our company reserves the right to charge 1.5% interest per month on all overdue account.</TextBase>
        <TextBase textclass={ style.noteText }>4. All cheques should be crossed 'A/C Payee Only' and made payable to 'Risetron Technology Solutions'.</TextBase>
        <TextBase textclass={ style.noteText_bank }>MAYBANK A/C : 502184106317</TextBase>
        <TextBase textclass={ style.noteText }>4. Without warranty coverage for FOC item(s).</TextBase>
      </div>
    </div>
  )
}
