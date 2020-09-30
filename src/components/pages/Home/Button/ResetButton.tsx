import React from 'react'
import IconButton from 'components/library/IconButton/IconButton';
import style from "./button.module.scss";
import cls from "classnames";

type resetButtonProps = {
  handleReset: () => void
}

export default function ResetButton(props: resetButtonProps) {
  return (
    <IconButton 
      iconName="fa-file"
      buttonclass={ cls(style.home_button) }
      onClick={ props.handleReset }
    />
  )
}
