import React from 'react';
import "./ToolButton.less"

const ToolButton = ({className, title, icon, image, children, onClick}) => {
    let classes = "octo-tool-button"
    if (className) {
        classes += ` ${className} `
    }
    return (
        <button title={title} className={classes} onClick={onClick}>
            {icon && (
                <span className="octo-tool-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {image && (
                <span className="octo-tool-button__icon">
                    <img src={image} alt=""/>
                </span>
            )}
            {children}
        </button>
    );
};

export default ToolButton;