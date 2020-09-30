import React, { useState } from 'react'
import TextBase from 'components/library/TextBase/TextBase';
import IconButton from 'components/library/IconButton/IconButton';
import style from "./ExpandPanel.module.scss";
import cls from "classnames";

type expandPanelProps = {
  title: string,
  children: React.ReactNode
  button ?: React.ReactElement
  expandclass ?: string
}

export default function ExpandPanel(props: expandPanelProps) {
  const [ visible, setVisible ] = useState(false);
  const toggleButton = visible ? 'fa-angle-up' : 'fa-angle-down';

  return (
    <div className={ cls( style.expandpanel, props.expandclass ) }>
      <div className={ style.expandpanel_header }>
        <TextBase>{ props.title }</TextBase>
        <div className={ style.expandpanel_button_container }>
          <IconButton iconName={toggleButton} onClick={ () => setVisible(!visible) }  />
          { props.button }
        </div>
      </div>
      <div style={{ display: visible ? 'block': 'none' }} >
        { props.children }
      </div>
    </div>
  )
}
