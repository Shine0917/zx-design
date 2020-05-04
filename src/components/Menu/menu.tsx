import React from 'react'

import classNames from 'classnames'
import {classes} from '../../utils'
type MenuMode  = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex} = props;
const classes = classes()
}

export default Menu;
