import fs from 'fs';

let timeout = 60000;
let poin = 500;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, '❐┃ماتهربش من السؤال ياكافر في سؤال ماتجاوبش🦦┃❌ ❯', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = parse(fs.readFileSync(`./src/game/acertijo.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // Fixed this line
    let caption = `
ⷮ ${json.question}

❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)}┇
❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
『♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕』
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['miku'];
handler.tags = ['game'];
handler.command = /^(دين)$/i;

export default handler;
