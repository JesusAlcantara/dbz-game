export default function isMobileDevice() {
    if (
        (window.navigator.userAgent.match(/Android/i)) ||
        (window.navigator.userAgent.match(/webOS/i)) ||
        (window.navigator.userAgent.match(/iPhone/i)) ||
        (window.navigator.userAgent.match(/iPod/i)) ||
        (window.navigator.userAgent.match(/iPad/i)) ||
        (window.navigator.userAgent.match(/BlackBerry/i))
    ) { return true }
    else { return false }
}