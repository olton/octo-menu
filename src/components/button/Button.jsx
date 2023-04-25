import React from 'react';
import "./Button.less"

const Button = ({caption, title, icon, image, hotkey, children, onClick, className, ...rest}) => {
    let classes = "octo-button"

    if (className) {
        classes += " " + className
    }

    return (
        <button type="button" title={title} className={classes} data-hotkey={hotkey} onClick={onClick} {...rest}>
            {icon && (
                <span className="octo-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {image && (
                <span className="octo-button__icon">
                    <img src={image} alt=""/>
                </span>
            )}
            {caption && (
                <span className="octo-button__caption">
                    {caption}
                </span>
            )}
            {children}
        </button>
    );
};

export default Button;