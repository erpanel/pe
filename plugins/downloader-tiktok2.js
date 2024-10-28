let { ttdl } = require('btch-downloader');

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, `• *Contoh:* .tiktok https://vm.tiktok.com/xxxxxxxxxxxxxx`, m);
  }
  if (!text.match(/tiktok/gi)) {
    return conn.reply(m.chat, '🔍 Pastikan link berasal dari TikTok, ya!', m);
  }
  m.reply('⏳ Tunggu sebentar, Bosku! Lagi ngedownload nih...');

  try {
    let p = await ttdl(`${text}`);
    await conn.sendFile(m.chat, p.video, 'tiktok.mp4', `🎥 *Judul:* ${p.title}`, m);
    conn.reply(m.chat, '✅ Download sukses! Cek videonya, bro!', m);
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❌ Maaf, terjadi kesalahan saat mendownload. Coba lagi nanti!', m);
  }
};

handler.help = ['tiktok2 <url>'];
handler.tags = ['downloader'];
handler.command = /^(tiktok2|tt2|tiktokdl2|tiktoknowm2)$/i;
handler.limit = false;
handler.group = false;

module.exports = handler;
