import React from 'react'
import ButtonBase from "components/library/ButtonBase/ButtonBase";
import cls from "classnames";
import style from "./iconbutton.module.scss";

type iconButtonProps = {
  iconType ?: string
  iconName: string,
  iconclass ?: string,
  buttonclass ?: string,
  onClick: (event: any) => void
}

export default function IconButton(props: iconButtonProps) {
  const { 
    iconName, 
    iconType,
    iconclass,
    buttonclass, 
    ...buttonProps 
  } = props;

  return (
    <ButtonBase 
      buttonclass={ cls( style.iconbutton, buttonclass) } 
      {...buttonProps}
    >
      <i className={ cls( iconType, iconName, iconclass ) }></i>
    </ButtonBase>
  )
}

IconButton.defaultProps = {
  iconType: 'fa'
};
