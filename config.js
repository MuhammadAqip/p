const numowner = '6285775062149'
global.namebot = '𝐀.𝐗.𝐈'
global.title = '𝐀.𝐗.𝐈 𝐕20'
// Thumbnail Logo Bot
global.banner = 'https://pomf2.lain.la/f/mctetlcj.jpg'
global.attacking = 'https://pomf2.lain.la/f/mctetlcj.jpg'
global.tracking = 'https://pomf2.lain.la/f/mctetlcj.jpg'
global.brutall = 'https://pomf2.lain.la/f/mctetlcj.jpg'
global.standby = 'https://pomf2.lain.la/f/mctetlcj.jpg'
// kebutuhan cpanel
global.apikey = 'ptla mu'
global.linkPanel = 'isi link panel'
global.egg = '15'
global.loc = '1'

// Ga Perlu Di Ganti
global.owner = [numowner]  
global.mods = [numowner] 
global.prems = [numowner]
global.nameowner = '𝐀.𝐗.𝐈'
global.numberowner = numowner
global.mail = 'permenmd@starsx.tech' 
global.maxwarn = '2'

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
