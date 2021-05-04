const { app, BrowserWindow } = require("electron");
const path = require("path");

let windo;
const createWindow = () => {
  const windo = new BrowserWindow({
    width: 1000,
    height: 600,
  });
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });
  windo.loadURL(startUrl);

  // windo.setResizable(false);
  windo.center();
  windo.fullScreenable = true;
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
    if (windo === null) {
      createWindow();
    }
  });

  app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
