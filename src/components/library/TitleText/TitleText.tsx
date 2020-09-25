import React from 'react';
import TextBase from 'components/library/TextBase/TextBase';

type titleTextProps = {
  containerclass ?: string
  titleclass ?: string
  textclass ?: string
  title: string,
  center ?: string
  children ?: React.ReactNode
};

export default function TitleText(props: titleTextProps) {
  const centerText = props.center ? <TextBase>{ props.center }</TextBase>: null;

  return (
    <div className={ props.containerclass }>
      <TextBase textclass={ props.titleclass }>{ props.title }</TextBase>
      { centerText }
      <TextBase textclass={ props.textclass }>{ props.children }</TextBase>
    </div>
  )
}
