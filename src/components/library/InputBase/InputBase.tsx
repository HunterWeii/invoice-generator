import React from 'react';
import style from "./input.module.scss";
import classNames from "classnames";

type inputProps = {
  inputclass ?: string,
  value ?: any,
  name: string,
  type ?: string
  onChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void
}

function InputBase(props: inputProps) {
  return (
    <input
      className={ classNames(style.input, props.inputclass) }
      type={ props.type } 
      name={ props.name }  
      value={ props.value }
      onChange={ props.onChange }
    />
  )
}

InputBase.defaultProps = {
  type: 'text'
}

export default InputBase; 
