import React, {useContext, useEffect, useRef} from 'react';
import "./ServicePanel.less"
import {MenuContext} from "../menu/Menu.jsx";

const ServicePanel = ({children}) => {
    const panelRef = useRef()
    const menuContext = useContext(MenuContext)

    const shiftServicePanel = () => {
        const menu = menuContext.menuRef.current
        const menuRect = menu.getBoundingClientRect()
        const panel = panelRef.current
        const panelRect = panel.getBoundingClientRect()

        panel.style.top = menuRect.top + "px"
        panel.style.left = (menuRect.left + menuRect.width - panelRect.width) + "px"
    }

    const handleScroll = () => {
        shiftServicePanel()
    }

    useEffect( () => {
        shiftServicePanel()

        document.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [] )

    return (
        <div className="octo-menu__service-panel" ref={panelRef}>
            {children}
        </div>
    );
};

export default ServicePanel;