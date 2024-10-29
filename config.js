global.owner = ['6285766450735']  
global.mods = ['6285766450735'] 
global.prems = ['6285766450735']
global.nameowner = 'botzz'
global.numberowner = '6285766450735' 
global.mail = 'support@tioprm.eu.org' 
global.gc = 'https://chat.whatsapp.com'
global.instagram = 'https://instagram.com/prm2.0'
global.wm = '© botzz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = '4zoe6D2Z' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'btzydiskyha'
//Daftar https://api.betabotz.eu.org 

//jangan diganti!
global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}

//ini tidak di isi juga tidak apa-apa
global.APIKeys = { 
  'https://api.botcahx.eu.org': '4zoe6D2Z' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
