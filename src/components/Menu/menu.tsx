import React, {createContext} from 'react'

// import classNames from 'classnames'
import {classes} from '../../utils'
type MenuMode  = 'horizontal' | 'vertical'
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex :string) => void;
  mode?: MenuMode;
  // default
}
export default MenuContext = createContext<IMenuContext>({index:'0'})
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const {className, mode, style, children, defaultIndex} = props;
const classes = classes(className,mode)
return (
  <ul className={classes} style={style}>
    <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
  </ul>
)
}

Menu.defaultProps = {
  defaultIndex:0,
  mode: 'horizontal'
}
export default Menu;
