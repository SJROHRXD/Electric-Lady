const { contextBridge, ipcRenderer } = require('electron');


// contextBridge.exposeInMainWorld( 'versions', {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     ping: () => ipcRenderer.invoke('ping')
// });

contextBridge.exposeInMainWorld('electronAPI', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    on: (channel, func) => {
        const subscription = ipcRenderer.on(channel, (event, ...args) => func(...args));
        return {
            unsubscribe: () => {
                ipcRenderer.removeListener(channel, subscription);
            }
        };
    }
});
