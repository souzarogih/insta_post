const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', '3721672-instagram_108066.png')

function createTray() {

    const tray = new Tray(iconPath)
    tray.setToolTip('Insta Reminder')
    return tray

}

module.exports = createTray()