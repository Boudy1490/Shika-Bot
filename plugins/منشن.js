let handler = async(m, { isOwner, isAdmin,
let member = participants.map(u => u.id)
 conn, text, participants, args, command }) => {
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
for(let i = 0; i < sum; i++) 
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*┇*\n*┇⌬الرسـاله📨:* 
 ${pesan}\n*┇الجــروب🌐:*\n${await conn.getName(m.chat)}\n*┇الاعضــاء👥:* ${sum}`
let teks = `*┓━『  المنشــن الجمــاعي 』━┏*\n${oi}\n*┇*\n*——————————*\n*منشـن┊🐥┊ستــورم :⇣*\n*——————————*\n`
for (let mem of participants) {
teks += `> *♦* @${mem.id.split('@')[0]}\n`}
teks += `*┓━━━————————————*\n> *𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪* \n*————————————‌*\n*‌                                  ━━━┗*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
