let { igdl } = require('btch-downloader')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Masukkan Link Instagram-nya, bro! 📥`

    try {
        let res = await igdl(args[0])
        if (!res || res.length === 0) throw `Gak ada hasil, coba link yang lain! 🤔`

        await conn.sendMessage(m.chat, { text: `Sedang mendownload... ⏳` }, { quoted: m })
        
        for (let i of res) {
            await conn.sendFile(m.chat, i.url, 'instagram.mp4', 'Yuk, tonton videonya! 🎥', m)
            await new Promise(resolve => setTimeout(resolve, 1500)) // Delay 1.5 detik
        }

        await conn.sendMessage(m.chat, { text: `Semua video sudah dikirim! 🎉` }, { quoted: m })
    } catch (error) {
        throw `Oops! Terjadi kesalahan: ${error.message} ❌`
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig(dl)?)$/i
handler.limit = true

module.exports = handler;
