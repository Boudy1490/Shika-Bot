import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*❗خطاء مثال عشـان تفهم ياغبي🦦 ${usedPrefix + command} شيكامارو*`
if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[❗خطاء❗] لا يمكنني إرسال هذا المحتوى ، المجموعة محظورة \n إذا كنت مشرفًا وتريد تنشيطها ، اخبر المطور')  
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `🔎 *صوره ل🦦:* *${text}*\n *من🥸* ♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕\n🌎 *المصـدر📍:* *🔗جوجل*`, m)}
//let captionn = `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁:* Google`
//conn.sendButton(m.chat, captionn, author, link, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(image|صوره)$/i
export default handler
