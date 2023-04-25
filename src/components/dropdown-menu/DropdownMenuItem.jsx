import React, {useContext, useRef, useState} from 'react';
import {MenuContext} from "../menu/Menu.jsx";

const DropdownMenuItem = ({
    target = "#",
    caption = "",
    icon,
    image,
    checkable = false,
    checked = false,
    radio = false,
    hotkey = "",
    ...rest
}) => {
    const menuContext = useContext(MenuContext)
    const itemRef = useRef()
    let classes = "octo-menu__dropdown-item"

    if (checked) { classes += " checked " }
    if (radio) { classes += " check-type-radio " }
    if (menuContext.hotkeys && hotkey) { classes += ` hotkey-enabled ` }

    const handleItemClick = (event) => {
        event.preventDefault()
        if (!checkable) return
        itemRef.current.classList.toggle("checked")
    }

    return (
        <div className={classes} {...rest} onClick={handleItemClick} ref={itemRef}>
            <a href={target} onClick={rest.onClick} data-hotkey={menuContext.hotkeys ? hotkey : ""}>
                {caption}
                {hotkey && menuContext.hotkeys && (
                    <span className="hotkey-key">{hotkey}</span>
                )}
            </a>
        </div>
    );
};

export default DropdownMenuItem;