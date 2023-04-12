import React from "react";

const Group = ({title, children, ...rest}) => {
    return (
        <div className="octo-menu__group" {...rest}>
            {children}
            {title && (
                <span className="title">{title}</span>
            )}
        </div>
    )
}

export default Group