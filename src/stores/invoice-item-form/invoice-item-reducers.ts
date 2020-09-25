import { 
  generateInvoiceItem,
  generateInvoicePage
} from "./invoice-item-generator";

type actionReducer = { 
  type: string,
  payload ?: any 
};

export function invoiceItemReducer(state: any, action: actionReducer) {
  const { type, payload = {} } = action;
  const { itemAt, name, value } = payload;

  switch(type) {
    case "reset": 
      return generateInvoicePage();
    

    case "add":
      return [
        ...state,
        generateInvoiceItem()
      ]
    

    case "delete":
      const copyState = [ ...state ];

      copyState.splice(itemAt, 1);

      return copyState;
    

    case "editItem":
      const editCopyState = [...state];
      const [ editItem ] = editCopyState.splice(itemAt, 1);
      const newItem = {
        ...editItem,
        [name]: value
      };

      // calAmount 
      newItem.amount = newItem.qty * newItem.unitPrice * newItem.discount;

      editCopyState.splice(itemAt, 0, newItem);
      
      return editCopyState;
  }
}