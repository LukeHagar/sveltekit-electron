const { app, BrowserWindow } = require("electron");
const path = require("path");
const { is } = require("@electron-toolkit/utils");
const handlerPkg = import(
  is.dev
    ? "../../Svelte-Build/src/handler.js"
    : `file://${path.join(
        process.resourcesPath,
        "Svelte-Build",
        "src",
        "handler.js"
      )}`
);
const express = require("express");
const log = require("electron-log/main");
log.info(
  "==================================Log Start=================================="
);

const port = 3000;
const origin = `http://localhost:${port}`;
log.info(`Starting server on ${origin}...`);

const server = express();

const createServer = async () => {
  try {
    log.info("Starting server...");
    const { handler } = await handlerPkg;
    // add a route that lives separately from the SvelteKit app
    server.get("/healthcheck", (req, res) => {
      log.info("Healthcheck route hit");
      res.end("ok");
    });

    // let SvelteKit handle everything else, including serving prerendered pages and static assets
    server.use(handler);

    server.listen(3000, () => {
      console.log(`Server listening on ${origin}`);
    });
  } catch (e) {
    log.info(e);
  }
};

createServer();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  log.info("Creating window...");
  // Create the browser window.
  try {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
    });

    log.info("Opening server in window...");
    // and load the index.html of the app.
    mainWindow.loadURL(origin);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  } catch (e) {
    log.info("Error creating window");
    log.info(e);
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
