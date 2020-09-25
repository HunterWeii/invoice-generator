import React from 'react'
import TitlePanel from 'components/library/TitlePanel/TitlePanel';
import TitleInput from 'components/library/TitleInput/TitleInput';

type customerFormProps = {
  formclass ?: string,
  form: any,
  handleForm: (event: any) => void
}

export default function InvoiceCustomerForm( props: customerFormProps ) {
  const {
    form,
    handleForm
  } = props;
  
  return (
    <TitlePanel title="Customer Info" titlecontainerclass={ props.formclass } >
      <TitleInput 
        title="Name"
        name="customerName"
        value={ form.customerName }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Address 1"
        name="customerAddress1"
        value={ form.customerAddress1 }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Address2"
        name="customerAddress2"
        value={ form.customerAddress2 }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Tel"
        name="customerTel"
        value={ form.customerTel }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Invoice"
        name="customerInvoice"
        value={ form.customerInvoice }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Term"
        name="customerTerm"
        value={ form.customerTerm }
        onChange={ handleForm }
      />
      <TitleInput 
        title="Date"
        name="customerInvoiceDate"
        type="date"
        value={ form.customerInvoiceDate }
        onChange={ handleForm }
      />
    </TitlePanel>
  )
}
