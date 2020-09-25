import React from 'react'
import classNames from "classnames";
import style from './text.module.scss'

type textProps = {
  textclass ?: string,
  secondary ?: boolean,
  children ?: React.ReactNode
};

export default function TextBase(props: textProps) {
  const classname = classNames(
    style.text,
    {
      [style.text_secondary]: props.secondary,
    },
    props.textclass
  );

  return (
    <span className={classname}>{ props.children }</span>  
  )
}

TextBase.defaultProps = {
  secondary: false
}
