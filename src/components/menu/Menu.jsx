import React, {createContext, useEffect, useRef, useState} from 'react';
import "./Menu.less"
import "../../themes/default/default.less"
import HotkeyBinder from "../hotkey-binder/index.js"
import {Group} from "./index.js";

export const MenuContext = createContext({})

const Menu = ({children, hotkeys}) => {
    const menuRef = useRef()
    const sectionRef = useRef()
    const [scrollVisible, setScrollVisible] = useState(false)
    const [scrollWidth, setScrollWidth] = useState(0)
    const [clientWidth, setClientWidth] = useState(0)
    const [delta, setDelta] = useState(0)
    const scrollLeftRef = useRef()
    const scrollRightRef = useRef()

    const resizeMenu = (event) => {
        const menu = menuRef.current
        const section = sectionRef.current
        const needScroll = section.scrollWidth > section.clientWidth

        setScrollVisible(needScroll)
        setScrollWidth(section.scrollWidth)
        setClientWidth(section.clientWidth)
        setDelta(section.scrollWidth - section.clientWidth)
        section.style.left = 0
    }

    const SHIFT_MENU_VAL = 10

    const shiftMenuRight = (event) => {
        const section = sectionRef.current
        let newVal = section.offsetLeft + SHIFT_MENU_VAL
        if (newVal > 0) newVal = 0
        section.style.left = newVal  + "px"
    }

    const shiftMenuLeft = (event) => {
        const section = sectionRef.current
        const rect = section.getBoundingClientRect()
        let newVal = section.offsetLeft - SHIFT_MENU_VAL
        if (Math.round(newVal) < Math.round(rect.width - section.scrollWidth) ) {
            newVal = Math.ceil(rect.width - section.scrollWidth)
        }
        section.style.left = newVal + "px"
    }

    let scrollLeftInterval = null
    let scrollRightInterval = null

    const scrollLeftMouseDown = (event) => scrollLeftInterval = setInterval( shiftMenuRight, 100)
    const scrollLeftMouseUp = (event) => clearInterval(scrollLeftInterval)

    const scrollRightMouseDown = (event) => scrollRightInterval = setInterval( shiftMenuLeft, 100)
    const scrollRightMouseUp = (event) => clearInterval(scrollRightInterval)

    useEffect(() => {
        const scrollLeft = scrollLeftRef.current

        if (!scrollLeft) return

        scrollLeft.addEventListener("mousedown", scrollLeftMouseDown)
        scrollLeft.addEventListener("mouseup", scrollLeftMouseUp)

        return () => {
            scrollLeft.removeEventListener("mousedown", scrollLeftMouseDown)
            scrollLeft.removeEventListener("mouseup", scrollLeftMouseUp)
        }
    })

    useEffect(() => {
        const scrollRight = scrollRightRef.current

        if (!scrollRight) return

        scrollRight.addEventListener("mousedown", scrollRightMouseDown)
        scrollRight.addEventListener("mouseup", scrollRightMouseUp)

        return () => {
            scrollRight.removeEventListener("mousedown", scrollRightMouseDown)
            scrollRight.removeEventListener("mouseup", scrollRightMouseUp)
        }
    })

    useEffect(() => {
        resizeMenu(null)
        window.addEventListener('resize', resizeMenu)
        return () => {
            window.removeEventListener('resize', resizeMenu)
        }
    }, [])

    return (
        <MenuContext.Provider value={{
            hotkeys,
            menuRef,
        }}>
            <div className="octo-menu-container">
                <nav className="octo-menu" ref={menuRef}>
                    {scrollVisible && (<span ref={scrollLeftRef} className="octo-menu__scroll-left">&#10094;</span>)}
                    <div className="octo-menu__section" ref={sectionRef}>
                        {children}
                        <Group style={{width: 34}}></Group>
                    </div>
                    {scrollVisible && (<span ref={scrollRightRef} className="octo-menu__scroll-right">&#10095;</span>)}
                    {hotkeys && <HotkeyBinder/>}
                </nav>
            </div>
        </MenuContext.Provider>
    );
};

export default Menu;