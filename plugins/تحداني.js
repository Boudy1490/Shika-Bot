let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 سؤال 」─*\n*“${pickRandom(global.bucin)}”*\n*└────* 𓆩𝐖.𝐒.𝐙『🔱』𝐒𝐓𝐎𝐑𝐌𓆪 *─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /تحداني/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.bucin = [ 
 "4هاشيرا و 3قاده من بلاك كلوفر", 
 "خمسة من طاقم اللحية البيضاء", 
 "جيب صوره ل رينغوكو", 
 "4 يونكو قدماء", 
 "جيب الايموجي ذا ⛽", 
 "ارسل خلفية هاتفك", 
 "جيب صوت ل ايزن", 
 "هات 5 هاشيرا",  
 "جيب 3 فواكه شيطان لوغيا",  
 "ارسل صورة ل اكازا", 
 "ارسل الايموجي ذا 🦫",   
 "5 شخصيات بحرف س",  
 "7 شخصيات بحرف ا",  
 "4 اشرار من انميات مختلقة",  
 "5 بطل قصة انمي",  
 "3 انميات اسمها يبدأ بحرف ب", 
  "جيب صورة ل تاتسومي من انمي اكامي غا كيل", 
  "اذكر 4 قدرات لميدوريا",  
 "جيب الايموجي ذا 🪶",  
 "5 شخصيات بحرف ش", 
  "جيب صورة ل هانجي", 
  "5 انواع عمالقة مع اسم كل مستخدم", 
  "4 شعرهم احمر", 
  "4 شعرهم ازرق",  
  "4 شعرهم اخضر", 
  "4 شعرهم وردي", 
  "4 شعرهم اسود",  
 "5 من فيلق الاستطلاع",
 "جيب الايموجي ذا 🧃",  
 "4 شخصيات بحرف ك", 
  "جيب صورة ل لويد", 
  "3 شخصيات تنتهي أسماؤهم بحرف ن", 
  "جيب صورتين ل توشيرو", 
  "جيب صورة فيها ميدوريا و باغوكو",  
  "4 من الهوكاجي", 
  "3 من القادة", 
  "جيب الايموجي ذا 🧉",  
 "4 شعرهم اشقر",  
 "4 شخصيات تبدأ بحرف و",  
 "3 انميات رياضية", 
  "اكتب 5 من طاقم لوفي بشكل معكوس", 
