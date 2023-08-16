// import { app, BrowserWindow } from 'electron';
// ES6 modules are not yet directly supported in Electron according to their docs
const {app, BrowserWindow} = require('electron');

// app controls your application's event lifecycle
// BrowserWindow creates and manages your application's windows

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
}

// createWindow loads web page into a new BrowserWindow instance
// loadFile loads a local HTML file into the window

app.whenReady().then(() => {
    createWindow();
})

// whenReady waits until Electron has finished initializing
// Many of Electron's core modules are Node.js event transmitters that adhere to asynchoronous event-driven architecture
// The app module is one of these emitters
// The whenReady method returns a Promise that resolves when the app module emits the ready event
// The then method is called when the Promise resolves, and calls the createWindow function
// The BrowserWindows can only be created after app module's ready event is fired - more info on this in the docs "Building your First App" section

// Application windows behave differently per operating system
// Electron allows the option to implement them in your app code
// Check against Node's process.platform variable to run code conditionally based on the OS
// https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app

// Quit app when Windows are all closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwn') app.quit();
})

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

