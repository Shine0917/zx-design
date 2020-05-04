import React from 'react'
import classnames from 'classnames'

export interface MenuItemProps {
  index?: number;
  disabled?:boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItemL: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style,children } = props;
  const classes = classNames('menu-item', classNames, {
    'is-disabled': disabled
  })
  return (
  <li className={classes} style={style}>{children}</li>
  )
}