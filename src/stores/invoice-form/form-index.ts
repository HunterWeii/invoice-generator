import { useReducer } from "react";
import { customerFormReducer } from "./form-reducer";
import { generateCustomerForm } from "./form-generator";

export function useCustomerForm() {
  const customerFormInit = generateCustomerForm();
  const [
    customerForm,
    customerFormDispatch
  ] = useReducer( customerFormReducer, customerFormInit);

  return {
    customerForm,
    customerFormDispatch
  }
}