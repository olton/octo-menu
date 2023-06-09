import React from 'react';
import "./IconButton.less"

const IconButton = ({className, caption, title, icon, image, children, onClick, hotkey, ...rest}) => {
    let classes = "octo-icon-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <button title={title} className={classes} onClick={onClick} data-hotkey={hotkey} {...rest}>
            {icon && typeof icon === 'string' && (
                <span className="octo-icon-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {icon && typeof icon !== 'string' && (
                <span className="octo-icon-button__icon">
                    {icon}
                </span>
            )}
            {image && typeof image === 'string' && (
                <span className="octo-icon-button__icon">
                    <img src={image} alt=""/>
                </span>
            )}
            {image && typeof image !== 'string' && (
                <span className="octo-icon-button__icon">
                    {image}
                </span>
            )}
            {caption && (
                <span className="octo-icon-button__caption">
                    {caption}
                </span>
            )}
            {children}
        </button>
    );
};

export default IconButton;