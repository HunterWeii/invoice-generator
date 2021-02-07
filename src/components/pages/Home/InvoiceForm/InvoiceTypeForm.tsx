import React from 'react'
import TitlePanel from 'components/library/TitlePanel/TitlePanel';
import style from './invoiceForm.module.scss';

const {
  invoiceForm_select
} = style;

type invoiceTypeProps = {
  form ?: any
  handleForm ?: any
}

export default function InvoiceTypeForm(props: invoiceTypeProps) {
  const {
    form,
    handleForm
  } = props;

  const onChange = (event:any): void => handleForm({ type: 'update', payload: { type: event.target.value } })
  
  return (
    <TitlePanel title="Invoice Type">
      <select 
        className={invoiceForm_select} 
        value={form.type}
        onChange={onChange}
      >
        <option value="invoice">Invoice</option>
        <option value="quotation">Quotation</option>
      </select>
    </TitlePanel>
  )
}