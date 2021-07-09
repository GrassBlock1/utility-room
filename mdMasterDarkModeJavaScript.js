// DarkMode for mdMaster
// Copied from MDr's darkmode.js
// Use CDN connect 'cause don't want to pack in mdMaster
// Special Thanks to FlyingSky for made me no need to rebuile wheel.

const onDarkMode = () => {
    var body = mdui.JQ('body'),
        appbar = document.getElementsByClassName('mdui-appbar')[0];
    console.log('Dark mode on');
    body.addClass('mdui-theme-layout-dark');
    appbar.style.backgroundColor = '#212121';
    var meta = document.getElementsByTagName('meta');
    meta["theme-color"].setAttribute('content', '#212121');
}
const offDarkMode = () => {
    var body = mdui.JQ('body'),
        appbar = document.getElementsByClassName('mdui-appbar')[0];
    console.log('Dark mode off');
    body.removeClass('mdui-theme-layout-dark');
    appbar.style.backgroundColor = '#ffffff';
    var meta = document.getElementsByTagName('meta');
    meta["theme-color"].setAttribute('content', mdrThemeColor);
}

window.addEventListener("beforeprint", function () {
    var body = mdui.JQ('body'),
        appbar = mdui.JQ('.mdui-appbar');
    appbar.hide();
    if (body.hasClass('mdui-theme-layout-dark')) {
        body.addClass('mdui-theme-layout-dark-print');
        body.removeClass('mdui-theme-layout-dark')
    }
});
window.addEventListener("afterprint", function () {
    var body = mdui.JQ('body'),
        appbar = mdui.JQ('.mdui-appbar');
    appbar.show();
    if (body.hasClass('mdui-theme-layout-dark-print')) {
        body.addClass('mdui-theme-layout-dark');
        body.removeClass('mdui-theme-layout-dark-print')
    }
});
const initDarkMode = () => {
    var css = getDarkModeFromCSSMediaQuery(),
        coo = getDarkModeFromCookie();
    if (css === coo) {
        applyDarkMode(css)
    } else if (coo === null) {
        applyDarkMode(css)
    } else {
        applyDarkMode(coo)
    }
}
const applyDarkMode = (mode) => {
    if (mode === true) {
        onDarkMode();
    } else if (mode === false) {
        offDarkMode();
    } else return;
}
const toggleDarkMode = () => {
    var dom = getDarkModeFromDom(),
        mode = dom ? false : true;
    applyDarkMode(mode)
}
document.addEventListener('visibilitychange', function () {
    initDarkMode();
});
document.getElementById('mdrDarkMode').addEventListener('click', () => {
    toggleDarkMode()
})

initDarkMode()
