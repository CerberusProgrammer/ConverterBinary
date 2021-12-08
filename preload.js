const customTitlebar = require('custom-electron-titlebar')
window.addEventListener('DOMContentLoaded', () => {
    titleBar = new customTitlebar.Titlebar();

    titleBar.updateTitle("Converter");
    titleBar.setHorizontalAlignment("left");
})