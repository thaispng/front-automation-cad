const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = await import('electron-is-dev').then(mod => mod.default);

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    }
  });

  if (isDev) {
    // Carregar localhost durante o desenvolvimento
    win.loadURL('http://localhost:3000');
    // Abrir as ferramentas de desenvolvedor
    win.webContents.openDevTools();
  } else {
    // Carregar arquivo HTML gerado pelo Next.js após o build
    win.loadFile(path.join(__dirname, 'out', 'index.html'));
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
