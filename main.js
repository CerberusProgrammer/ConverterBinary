const { app, BrowserWindow } = require("electron")
const path = require("path")

let window;

createWindow = () => {
    window = new BrowserWindow({
        width: 400,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            enableRemoteModule: true,
            nodeIntegration: false
        }
    })

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