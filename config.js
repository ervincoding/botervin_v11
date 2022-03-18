/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6283115824395','6283115824395','6283115824395']
global.pemilik = ['6283115824395']
global.premium = ['6283115824395']
global.pengguna = 'Ervin FAhreza'
global.botnma = 'Bot Zick'
global.footer = '© Bot Zick' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://chat.whatsapp.com/DIwWAo6RNSQGNC7CCfTCKk' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://chat.whatsapp.com/DIwWAo6RNSQGNC7CCfTCKk' //Ubah Jga Bebas Sama lu 
global.ganti = 'Gabung Grup Bot' //Edit Terserah Lu Mau Apa
global.ganti2 = 'GrupWa'
global.ownernma = 'Ervin Fahreza'
global.packname = 'Bot Zick'
global.author = 'WhatsApp Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
