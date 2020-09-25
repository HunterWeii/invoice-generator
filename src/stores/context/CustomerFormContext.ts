import React, { useState, useCallback } from 'react';

const CUSTOMERFORM = {
  customerForm: {
    customerName: '',
    customerAge: 30
  },
  updateCustomerForm(what: any) {}
}

export const customerFormContext = React.createContext(CUSTOMERFORM);

// hooks 
export function useCustomerForm() {
  const [ customerForm, setCustomerForm ] = useState({ customerName: '', customerAge: 30 });
  const updateCustomerForm = useCallback((what) => {
    const { name, value } = what;
    setCustomerForm({
      ...customerForm,
      [name]: value
    });
  }, [customerForm]);

  return  {
    customerForm,
    updateCustomerForm
  }
}
