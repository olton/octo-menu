import {SHIFT_NUMS, SPECIAL_KEYS} from "./keymap.js";

export const isMac = navigator.userAgent.includes('Mac OS')
export const isVisible = (elem) => !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
export const matches = Element.prototype.matches
export const closest = (el, selector) => {
    if (!selector) {
        return null
    }
    let parent = el.parentNode
    while (parent) {
        if (parent instanceof HTMLElement && matches.call(parent, selector)) {
            return parent
        }
        parent = parent.parentNode
    }
    return null
}

export const getKey = (e) => {
    const k = e.keyCode, char = String.fromCharCode(k).toLowerCase();
    let key

    if (e.shiftKey) {
        // @ts-ignore
        key = SHIFT_NUMS[char] ? SHIFT_NUMS[char] : char;
    } else {
        // @ts-ignore
        key = SPECIAL_KEYS[k] === undefined ? char : SPECIAL_KEYS[k];
    }

    return getModifier(e).length ? getModifier(e).join("+") + "+" + key : key;
}

export const getModifier = (e) => {
    const m = [];
    if (e.altKey) {
        m.push("alt");
    }
    if (e.ctrlKey) {
        m.push("ctrl");
    }
    if (isMac && e.metaKey) {
        m.push("ctrl");
    }
    if (e.shiftKey) {
        m.push("shift");
    }
    return m;
}
