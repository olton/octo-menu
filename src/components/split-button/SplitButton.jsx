import React, {Children} from "react";
import "./SplitButton.less"
import Button from "../button/Button.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";
import IconButton from "../icon-button/IconButton.jsx";


const SplitButton = ({children, className, title, caption, icon, image, onClick, ...rest}) => {
    const [menu] = Children.toArray(children)
    let classes = "octo-split-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <div className={classes} {...rest}>
            <Button icon={icon} image={image} title={title} onClick={onClick}/>
            <div className="divider"></div>
            <Dropdown>
                <IconButton caption={caption}/>
                {menu}
            </Dropdown>
        </div>
    );
};

export default SplitButton;