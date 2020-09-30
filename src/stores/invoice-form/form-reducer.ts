import { generateCustomerForm } from "./form-generator";

type actionReducer = { 
  type: string,
  payload ?: any 
};

export function customerFormReducer<T>(state: T, action: actionReducer) {
  const { type, payload = {} } = action;
  switch(type) {
    case 'reset':
      return generateCustomerForm();
      
    case 'update':
      const { name, value } = payload;
      return {
        ...state,
        [name]: value
      }
    
    case 'load':
      const { customerForm } = payload;
      return customerForm;
  }
}

