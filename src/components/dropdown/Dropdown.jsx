import React, {useRef, useState, Children, cloneElement, useEffect} from "react";
import "./Dropdown.less"

const Dropdown = ({children}) => {
    const [open, setOpen] = useState(false)
    const [toggle, menu] = Children.toArray(children)
    const dropdownRef = useRef()

    let classes = "octo-menu__dropdown"

    if (open) {
        classes += " " + "dropped"
    }

    const handleClick = (event) => {
        event.preventDefault()
        setOpen(prev => !prev)
    }

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={classes} ref={dropdownRef}>
            {toggle && cloneElement(toggle, {
                className: ( "props" in toggle && toggle.props.className ? toggle.props.className : '') + ' dropdown-toggle ' + (open ? ' active-dropdown ' : ''),
                onClick: handleClick
            })}

            {menu}
        </div>
    )
}

export default Dropdown