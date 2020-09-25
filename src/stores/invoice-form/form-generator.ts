import { ICustomerForm } from 'interfaces/IInvoiceForm';
import moment from "library/date/index";

export const generateCustomerForm = (): ICustomerForm => ({
  customerAddress1: "",
  customerAddress2: "",
  customerInvoice: "",
  customerInvoiceDate: moment.getTodayDate(),
  customerName: "",
  customerTel: "",
  customerTerm: ""
});