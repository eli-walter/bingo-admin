const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 420,
    height: 820,
    resizable: false,
    title: 'BingoAdmin',
    webPreferences: { nodeIntegration: false }
  });
  win.loadURL('http://localhost:3000');
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
