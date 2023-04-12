import React, {Children, cloneElement, useState} from 'react';
import "./ButtonGroup.less"

const ButtonGroup = ({children, radio = false, active = [], className, ...rest}) => {
    const [radioMode] = useState(radio)
    const [activeButtons, setActiveButtons] = useState([])
    let classes = "octo-button-group"

    if (className) {
        classes += ` ${className} `
    }

    const buttonClickHandler = (button, index, event) => {
        const isActive = activeButtons.includes(index)
        const buttons = [...activeButtons]

        if (radioMode) {
            setActiveButtons([index])
        } else {
            if (!isActive) {
                buttons.push(index)
            } else {
                buttons.splice(buttons.indexOf(index), 1)
            }
            setActiveButtons(buttons)
        }

        if (typeof button.props.onClick === "function") {
            button.props.onClick.apply(null, [index])
        }
    }

    if (radioMode && activeButtons.length === 0) {
        setActiveButtons([0])
    }

    return (
        <div className={classes} {...rest}>
            {
                Children.map(children, (button, index) => {
                    const props = button.props
                    const isActive = activeButtons.includes(index)
                    return(
                        cloneElement(button, {
                            ...props,
                            className: `${props.className ? props.className : ''} ${isActive ? 'checked' : ''}`,
                            onClick: buttonClickHandler.bind(null, button, index)
                        })
                    )
                })
            }
        </div>
    );
};

export default ButtonGroup;