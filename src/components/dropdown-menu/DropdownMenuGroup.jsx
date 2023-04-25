import React, {Children, cloneElement, useState} from 'react';

const DropdownMenuGroup = ({children, checked = 0}) => {
    const [checkedItem, setCheckedItem] = useState(checked)

    const buttonClickHandler = (item, index) => {
        if (checkedItem !== index)
            setCheckedItem(index)

        if (typeof item.props.onClick === "function") {
            // item.props.onClick.apply(null, [index])
        }
    }

    return (
        <>
            {Children.map(children, (item, index) => {
                return cloneElement(item, {
                    ...item.props,
                    checked: index === checkedItem,
                    radio: true,
                    onClick: buttonClickHandler.bind(null, item, index)
                })
            })}
        </>
    );
};

export default DropdownMenuGroup;