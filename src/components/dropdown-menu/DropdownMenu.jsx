import React from "react";
import "./DropdownMenu.less"

const DropdownMenu = ({children}) => {
    return (
        <nav className="octo-menu__dropdown-menu">
            {children}
        </nav>
    )
}

export default DropdownMenu