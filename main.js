const { app, BrowserWindow } = require('electron')
const path = require('path')

function App() {

}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 250,
        height: 310,
        show: false,
        frame: false, //barra de título com os botões
        resizable: false, //dimensões da tela
        fullscreen: false //tela cheia
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})