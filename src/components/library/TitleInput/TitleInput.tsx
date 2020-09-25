import React from 'react'
import classNames from "classnames";
import TextBase from 'components/library/TextBase/TextBase'
import InputBase from 'components/library/InputBase/InputBase'
import style from './titleinput.module.scss';

type titleProps = {
  titleclass ?: string
  inputclass ?: string
  textclass ?: string
  title: string
  name : string 
  value ?: any
  type ?: string
  onChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void
}

export default function TitleInput(props: titleProps) {
  const { title, textclass, ...inputProps } = props;
  return (
    <div className={ classNames(style.title_input, props.titleclass) } >
      <TextBase textclass={textclass}>{ title }</TextBase>
      <div className={ style.title_input_seperator }>
        <InputBase 
          {...inputProps}
        />
      </div>
    </div>
  )
}
