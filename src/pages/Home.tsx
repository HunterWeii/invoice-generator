import React, { useEffect } from 'react'
import CustomerForm from 'components/pages/Home/InvoiceForm/InvoiceCustomerForm';
import InvoiceViewer from 'components/pages/Home/InvoiceViewer/InvoiceViewer';
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

  // componentDidMount
  useEffect(function componentDidMount() {
    let saveItems = localStorage.getItem('risetron-invoice') || "";
    if (saveItems) {
      let { customerForm } = JSON.parse(saveItems);
      customerFormDispatch({
        type: 'load',
        payload: { customerForm }
      });

      console.log('how many times you run');
    }
  }, [customerFormDispatch])

  // componentDidUpdate
  useEffect(function componentDidUpdate() {
    const saveItems = { customerForm };
    localStorage.setItem('risetron-invoice', JSON.stringify(saveItems));
  });

  return (
    <section className="home">
      <div className="home_form">
        <CustomerForm 
          form={ customerForm }
          handleForm={ handleCustomerForm }
        />
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