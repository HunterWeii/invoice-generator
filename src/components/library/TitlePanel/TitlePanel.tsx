import React from 'react';
import classNames from 'classnames';
import TextBase from "components/library/TextBase/TextBase";
import style from './titlepanel.module.scss';

type titlePanelProps = {
  title: string,
  titlecontainerclass ?: string,
  titleclass ?: string,
  children : React.ReactNode
}

export default function TitlePanel( props: titlePanelProps ) {
  return (
    <div className={ classNames(style.title_panel, props.titlecontainerclass)  }>
      <TextBase textclass={ classNames(style.title_panel_title, props.titleclass) }>{ props.title }</TextBase>
      <div className={ style.title_panel_seperator }>
        { props.children }
      </div>
    </div>
  )
}
