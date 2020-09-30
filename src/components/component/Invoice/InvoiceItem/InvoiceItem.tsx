import React from 'react'
import style from './invoiceItem.module.scss';

type InvoiceItemProps = {
  invoicePageItems: any
}

function formatPrice(num: number): string {
  if(num === 0) return "";
  return num.toFixed(2)
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
              let {
                itemIndex,
                unitPrice,
                discount,
                amount,
                qty,
                description
              } = item;

              return (
                <tr key={index}>
                  <td>{ itemIndex }</td>
                  <td style={{ textAlign: 'left' }}>{ description }</td>
                  <td>{ qty }</td>
                  <td>{ formatPrice(unitPrice) }</td>
                  <td>{ formatPrice(discount) }</td>
                  <td>{ formatPrice(amount) }</td>
                </tr>
              ) 
            })
          }
        </tbody>
      </table>
    </div>
  )
}
