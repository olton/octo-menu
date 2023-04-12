import React, {createContext} from 'react';
import "./Menu.less"
import "../../themes/default/default.less"
import HotkeyBinder from "../hotkey-binder/index.js"

export const MenuContext = createContext({})

const Menu = ({children, hotkeys}) => {
    return (
        <MenuContext.Provider value={{
            hotkeys,
        }}>
            <nav className="octo-menu">
                <div className="octo-menu__section">
                    {children}
                </div>
                {hotkeys && <HotkeyBinder/>}
            </nav>
        </MenuContext.Provider>
    );
};

export default Menu;