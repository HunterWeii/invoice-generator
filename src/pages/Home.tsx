import React, { useEffect } from 'react'
import CustomerForm from 'components/pages/Home/InvoiceForm/InvoiceCustomerForm';
import InvoiceItemForm from 'components/pages/Home/InvoiceForm/InvoiceItemForm';
import InvoiceViewer from 'components/pages/Home/InvoiceViewer/InvoiceViewer';
import GeneratePDFButton from 'components/pages/Home/Button/GeneratePDFButton';
import ResetButton from 'components/pages/Home/Button/ResetButton';
import { useCustomerForm } from "stores/invoice-form/form-index";
import { useInvoiceItems } from "stores/invoice-item-form/invoice-item-index";
import "./home.scss";

export default function Home() {
  const {
    customerForm,
    customerFormDispatch
  } = useCustomerForm();

  const handleCustomerForm = (event: any): void => {
    const { name, value } = event.currentTarget;
    const payload = { name, value };
    const type = 'update';
    customerFormDispatch({ type, payload });
  };

  const {
    invoicePageForm,
    invoicePageFormReducer
  } = useInvoiceItems();

  const handleInvoiceItem = (itemAt: number) => (event: any): void => {
    const { name, value } = event.currentTarget;
    const payload = { name, value, itemAt };
    const type = 'editItem';

    invoicePageFormReducer({ type, payload });
  };

  const handleDeleteInvoiceItem = (itemAt: number) => {
    const payload = { itemAt };
    const type = 'delete';

    invoicePageFormReducer({ type, payload });
  };

  const handleAddInvoiceItem = () => invoicePageFormReducer({ type: 'add' });

  const handleReset = () => {
    customerFormDispatch({ type: 'reset' });
    invoicePageFormReducer({ type: 'reset' });
  };

  // componentDidMount
  useEffect(function componentDidMount() {
    let saveItems = localStorage.getItem('risetron-invoice') || "";
    if (saveItems) {
      let { customerForm } = JSON.parse(saveItems);
      customerFormDispatch({
        type: 'load',
        payload: { customerForm }
      });
    }
  }, [customerFormDispatch])

  // componentDidUpdate
  useEffect(function componentDidUpdate() {
    const saveItems = { customerForm };
    localStorage.setItem('risetron-invoice', JSON.stringify(saveItems));
  });

  return (
    <section className="home">
      <ResetButton handleReset={ handleReset } />
      <GeneratePDFButton />
      <div className="home_form">
        <CustomerForm 
          form={ customerForm }
          handleForm={ handleCustomerForm }
        />
        <div className="home_invoice_container">
          <InvoiceItemForm
            invoiceForm={ invoicePageForm }
            handleAddInvoiceItem={ handleAddInvoiceItem }
            handleInvoiceItem={ handleInvoiceItem }
            handleDeleteInvoiceItem={ handleDeleteInvoiceItem } />
        </div>
      </div>
      <div className="home_viewer"  >
        <InvoiceViewer 
          customerForm={ customerForm } 
          invoicePageItems={ invoicePageForm }
        />
      </div>
    </section>
  )
}
