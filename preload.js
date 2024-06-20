// Preload script to expose a safe API to the renderer process
const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (channel, data) => {
    // List of allowed channels
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receiveMessage: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
