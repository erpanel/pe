const yts = require("yt-search");
const fetch = require('node-fetch');

const handler = async (m, { conn, text }) => {
    if (!text) throw 'Please enter a YouTube title or link!';

    try {
        const search = await yts(text);
        if (!search || !search.all || search.all.length === 0) {
            throw 'No results found for your query!';
        }

        const videoUrl = search.all[0].url;

        const response = await ytdl(videoUrl);

        const mp3Url = response.data.mp3;
        if (!mp3Url) {
            throw 'Failed to retrieve the mp3 link!';
        }

        await conn.sendMessage(m.chat, {
            audio: { url: mp3Url },
            mimetype: "audio/mpeg",
            fileName: "alfixd.mp3",
            contextInfo: {
                forwardingScore: 100,
                isForwarded: false,
                externalAdReply: {
                    showAdAttribution: true,
                    title: search.all[0].title,
                    sourceUrl: videoUrl,
                    thumbnailUrl: search.all[0].thumbnail,
                }
            }
        }, { quoted: m });

    } catch (e) {
        conn.reply(m.chat, `*Error:* ${e.message}`, m);
    }
};

handler.command = ['play', 'ds', 'song'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

module.exports = handler;

async function ytdl(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: url })
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch audio: HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
                     }
                   
