import React from "react";

const ScrollButton = ({refButton, chevron = 'left'}) => {
    const classes = `octo-menu__scroll-${chevron}`
    return (
        <span ref={refButton} className={classes}>
            {chevron === 'left' && (<span>&#10094;</span>)}
            {chevron === 'right' && (<span>&#10095;</span>)}
        </span>
    )
}

export default ScrollButton