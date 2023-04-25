import React, {Children} from "react";
import "./SplitButton.less"
import Button from "../button/Button.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";
import IconButton from "../icon-button/IconButton.jsx";


const SplitButton = ({children, className, title, caption, icon, image, onClick, onClickSecondary, hotkey, disabled, disabledSecondary, ...rest}) => {
    const [menu] = Children.toArray(children)
    let classes = "octo-split-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <div className={classes} {...rest}>
            <Button icon={icon} image={image} title={title} onClick={onClick} hotkey={hotkey} disabled={disabled}/>
            <div className="divider"></div>
            {menu && (
                <Dropdown>
                    <IconButton caption={caption} onClick={onClickSecondary} disabled={disabledSecondary}/>
                    {menu}
                </Dropdown>
            )}
            {!menu && (
                <IconButton caption={caption} onClick={onClickSecondary} disabled={disabledSecondary}/>
            )}
        </div>
    );
};

export default SplitButton;