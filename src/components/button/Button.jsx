import React from 'react';
import "./Button.less"

const Button = ({caption, title, icon, image, hotkey, children, onClick, className, ...rest}) => {
    let classes = "octo-button"

    if (className) {
        classes += " " + className
    }

    return (
        <button type="button" title={title} className={classes} data-hotkey={hotkey} onClick={onClick} {...rest}>
            {icon && typeof icon === 'string' && (
                <span className="octo-button__icon">
                    <span className={icon}/>
                </span>
            )}
            {icon && typeof icon !== 'string' && (
                <span className="octo-button__icon">
                    {icon}
                </span>
            )}
            {image && typeof image === 'string' && (
                <span className="octo-button__icon">
                    <img src={image} alt=""/>
                </span>
            )}
            {image && typeof image !== 'string' && (
                <span className="octo-button__icon">
                    {image}
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