import React, {useEffect} from 'react';
import {closest, getKey, isVisible} from "./helpers.js";

const HotkeyBinder = () => {
    const hotkeyBinderKeyupHandler = (event) => {
        let key = getKey(event)

        // Get elements where hotkey is defined
        const hk_el = document.querySelectorAll(`[data-hotkey="${key}"]`)

        // If no elements, return
        if (!hk_el.length) {
            return
        }

        try {
            for(let el of hk_el) {
                if (el.disabled) {return}
                if (el.classList.contains('disabled')) {return}
                const menu = closest(el, ".octo-menu")
                if (menu) {
                    // Hotkey on element in Ribbon Menu
                    if (isVisible(menu)) { // Press button on active ribbon
                        (el).click()
                        return
                    }
                } else {
                    // Click on fist founded element
                    (el).click()
                    return
                }
            }
        } catch (ex) {}
    }

    useEffect(() => {
        document.addEventListener("keyup", hotkeyBinderKeyupHandler)
        return () => {
            document.removeEventListener("keyup", hotkeyBinderKeyupHandler)
        }
    }, [])

    return null;
};

export default HotkeyBinder;