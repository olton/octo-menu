import React from 'react';
import "./ToolButton.less"

const ToolButton = ({className, title, icon, image, children, onClick, hotkey, ...rest}) => {
    let classes = "octo-tool-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <button title={title} className={classes} onClick={onClick} data-hotkey={hotkey} {...rest}>
            {icon && typeof icon === 'string' && (
                <span className="octo-tool-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {icon && typeof icon !== 'string' && (
                <span className="octo-tool-button__icon">
                    {icon}
                </span>
            )}
            {image && typeof image === 'string' && (
                <span className="octo-tool-button__icon">
                    <img src={image} alt=""/>
                </span>
            )}
            {image && typeof image !== 'string' && (
                <span className="octo-tool-button__icon">
                    {image}
                </span>
            )}
            {children}
        </button>
    );
};

export default ToolButton;