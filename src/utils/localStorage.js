export function getItem(item) {
    if (!item || !localStorage.getItem(item)) {
        return false
    }
    return JSON.parse(localStorage.getItem(item))
}

export function setItem(item, val) {
    return localStorage.setItem(item, JSON.stringify(val))
}