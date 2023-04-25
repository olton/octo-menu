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

    const setPositionForDropdown = () => {
        const dropdown = dropdownRef.current
        const dropObject = dropdown.querySelector(".octo-menu__dropdown-menu")
        const rectDropdown = dropdown.getBoundingClientRect()
        const position = getComputedStyle(dropObject)["position"]

        if (position === "fixed") {
            dropObject.style.top = (rectDropdown.top + rectDropdown.height) + "px"
            dropObject.style.left = (rectDropdown.left) + "px"
        }
    }

    const handleScroll = (event) => {
        setPositionForDropdown()
    }

    const handleClick = (event) => {
        setPositionForDropdown()
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
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("scroll", handleScroll)
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