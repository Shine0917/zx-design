import React, {createContext, useState} from 'react'

// import classNames from 'classnames'
import {classes} from '../../utils'
type MenuMode  = 'horizontal' | 'vertical'
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex :string) => void;
  mode?: MenuMode;
  // default
}
export const MenuContext = createContext<IMenuContext>({index:'0'})
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex} = props;
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classes(className, {'menu-vertical': mode=== 'vertical', 'menu-horizontal': mode !== 'vertical'});
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
  }
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
return (
  <ul className={classes} style={style}>
    <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
  </ul>
)
}

Menu.defaultProps = {
  defaultIndex:'0',
  mode: 'horizontal'
}
export default Menu;
