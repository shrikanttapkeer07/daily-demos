const { app, BrowserWindow } = require("electron");

const PROD_URL = "http://demos.daily.co/react-demo/";
const DEV_URL = "http://localhost:3000/react-demo";

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Use DEV_URL for testing local changes
  win.loadURL(process.env.NODE_ENV === "development" ? DEV_URL : PROD_URL);
}

app.whenReady().then(createWindow);
