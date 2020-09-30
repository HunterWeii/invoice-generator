import React from 'react'
import IconButton from 'components/library/IconButton/IconButton';
import generatePDF from 'library/generatePDF';
import style from "./button.module.scss";
import cls from "classnames";

export default function GeneratePDF() {
  return (
    <IconButton 
      iconName="fa-print"
      buttonclass={ cls(style.home_button, style.home_button_print) }
      onClick={ generatePDF }
    />
  )
}
