import React from 'react';
import "./IconButton.less"

const IconButton = ({className, caption, title, icon, image, children, onClick}) => {
    let classes = "octo-icon-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <button title={title} className={classes} onClick={onClick}>
            {icon && (
                <span className="octo-icon-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {image && (
                <span className="octo-icon-button__icon">
                    <img src={image} alt=""/>
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