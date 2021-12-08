const { app, BrowserWindow, Menu } = require("electron")
const path = require("path")

Menu.setApplicationMenu(false);

let window;

createWindow = () => {
    window = new BrowserWindow({
        width: 451,
        height: 400,
        frame: false,
        icon: "ic_transform_128_28811.ico",
        //titleBarStyle: "hidden",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            enableRemoteModule: true,
            nodeIntegration: false
        }
    })

    window.setMenu(null);
    window.removeMenu();
    window.loadURL(`file://${__dirname}/dist/index.html`);

    window.on("closed", () => {
        window = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});