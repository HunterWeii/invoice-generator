import React from 'react'
import style from './invoiceItem.module.scss';

type InvoiceItemProps = {
  invoicePageItems: any
}

function formatPrice(num: number | string): string {
  num = parseFloat(num as string);

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
            <th style={{ width: '300px', textAlign: 'left' }}>Description</th>
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
                qty,
                description
              } = item;
              
              const itemDiscount = parseFloat(discount) === 0 ? 1 : parseFloat(discount); 
              const itemAmount = parseFloat(unitPrice) * parseFloat(qty) * itemDiscount;

              return (
                <tr key={index}>
                  <td style={{ verticalAlign: "top"}}>{ itemIndex }</td>
                  <td style={{ textAlign: 'left', width: "300px" }}>{ description }</td>
                  <td>{ qty }</td>
                  <td>{ formatPrice(unitPrice || 0) }</td>
                  <td>{ formatPrice(discount || 0) }</td>
                  <td>{ formatPrice(itemAmount) }</td>
                </tr>
              ) 
            })
          }
        </tbody>
      </table>
    </div>
  )
}
