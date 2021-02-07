import React from 'react';
import TextBase from 'components/library/TextBase/TextBase'
import style from './invoiceSummary.module.scss'

const {
  noteText,
  noteText_bank
} = style;

export default function InvoiceNote() {
  return (
    <div>
      <TextBase textclass={ noteText }>Notes:</TextBase>
      <TextBase textclass={ noteText }>1. Goods sold are not returnable.</TextBase>
      <TextBase textclass={ noteText }>2. All goods sold shall still remain as the property of 'Risetron Technology Solutions' until full payment is made.</TextBase>
      <TextBase textclass={ noteText }>3. Our company reserves the right to charge 1.5% interest per month on all overdue account.</TextBase>
      <TextBase textclass={ noteText }>4. All cheques should be crossed 'A/C Payee Only' and made payable to 'Risetron Technology Solutions'.</TextBase>
      <TextBase textclass={ noteText_bank }>MAYBANK A/C : 502184106317</TextBase>
      <TextBase textclass={ noteText }>4. Without warranty coverage for FOC item(s).</TextBase>
    </div>
  )
}