import React from 'react'
import ExpandPanel from 'components/library/ExpandPanel/ExpandPanel';
import TitlePanel from 'components/library/TitlePanel/TitlePanel';
import TitleInput from 'components/library/TitleInput/TitleInput';
import ButtonBase from 'components/library/ButtonBase/ButtonBase';
import IconButton from 'components/library/IconButton/IconButton';
import style from "./invoiceForm.module.scss";

type invoiceItemProps = {
  invoiceForm ?: any
  handleAddInvoiceItem: () => void
  handleInvoiceItem: (itemAt: number) => (event: any) => void
  handleDeleteInvoiceItem: (itemAt: number) => void
}

export default function InvoiceItemForm(props: invoiceItemProps) {
  const { 
    invoiceForm,
    handleInvoiceItem,
    handleDeleteInvoiceItem,
    handleAddInvoiceItem
  } = props;

  return (
    <TitlePanel title="Invoice Items">
      {
        invoiceForm.map(function( item: any, index: number ) {
          const uniqueKey = `rise_${index}`;
          const title = `Item ${index + 1}`;
          const DeleteButton = (
            <IconButton iconName="fa-trash" onClick={ () => handleDeleteInvoiceItem(index) } />
          );
          const handleInputChange = handleInvoiceItem(index);

          return (
            <ExpandPanel
              key={ uniqueKey } 
              title={ title }
              button={ DeleteButton }
            >
              <TitleInput 
                title="Item Index"
                name="itemIndex"
                value={ item.itemIndex }
                onChange={ handleInputChange }
              />
            </ExpandPanel>
          )
        })
      }
      <div className={ style.invoiceForm_container }>
        <ButtonBase 
          buttonclass={ style.invoiceForm_button }
          onClick={ handleAddInvoiceItem }>Add Item</ButtonBase>
      </div>
    </TitlePanel>
  )
}
