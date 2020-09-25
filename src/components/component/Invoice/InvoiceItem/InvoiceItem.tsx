import React from 'react'
import style from './invoiceItem.module.scss';

type InvoiceItemProps = {
  invoicePageItems: any
}

export default function InvoiceItem(props: InvoiceItemProps) {
  return (
    <div className={ style.invoice_item }>
      <table className={ style.invoice_item_table }>
        <thead>
          <tr>
            <th style={{ width: '50px'}}>Item</th>
            <th style={{ width: '300px', textAlign: 'left' }} >Description</th>
            <th>QTY</th>
            <th>Unit Price (RM)</th>
            <th>Discount</th>
            <th>Amount (RM)</th>
          </tr>
        </thead>
        <tbody>
          {
            props.invoicePageItems.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{ index + 1 }</td>
                  <td style={{ textAlign: 'left' }}>{ item.description }</td>
                  <td>{ item.qty }</td>
                  <td>{ item.unitPrice.toFixed(2) }</td>
                  <td>{ item.discount.toFixed(2) }</td>
                  <td>{ item.amount.toFixed(2) }</td>
                </tr>
              ) 
            })
          }
        </tbody>
      </table>
    </div>
  )
}
