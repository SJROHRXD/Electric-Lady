// There are two Node.js concepts that are used here: __dirname and path.join
// The __dirname string points to the path of the currently executing script (in this case, your project's root folder).
// The path.join API joins multiple path segments together, creating a combined path string that works across all platforms.

// createWindow loads web page into a new BrowserWindow instance
// loadFile loads a local HTML file into the window

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

// app controls your application's event lifecycle
// BrowserWindow creates and manages your application's windows

// import { app, BrowserWindow } from 'electron';
// ES6 modules are not yet directly supported in Electron according to their docs

// https://www.electronjs.org/docs/latest/tutorial/tutorial-preload#summary