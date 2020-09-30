import React, { ReactElement } from 'react'

type buttonBaseProps = {
  children: React.ReactNode,
  left ?: ReactElement
  right ?: ReactElement
  buttonclass ?: string
  onClick: (event: any) => void
};

export default function ButtonBase(props: buttonBaseProps) {
  return (
    <button 
      className={ props.buttonclass }
      onClick={ props.onClick }
    >
      { props.left }
      { props.children }
      { props.right }
    </button>
  )
}

ButtonBase.defaultProps = {
  left: null,
  right: null 
}
