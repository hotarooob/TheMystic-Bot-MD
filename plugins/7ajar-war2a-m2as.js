//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ حدد حجرة/ورقة/مقص\n\nمثال : *${usedPrefix + command}* ورقة\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'حجرة'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'مقص'
    } else {
        astro = 'ورقة'
    }

    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *تعادل*\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\n🎁 نقاط (±)100 XP`)
    } else if (text == 'حجرة') {
        if (astro == 'مقص') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *فاز* 🎊\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\n🎁 نقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *خاسر*\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\n نقاط *-${poin} XP*`)
        }
    } else if (text == 'مقص') {
        if (astro == 'ورقة') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *فاز* 🎊\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\n🎁 نقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *خاسر*\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\nنقاط *-${poin} XP*`)
        }
    } else if (text == 'ورقة') {
        if (astro == 'حجرة') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *فاز* 🎊\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\n🎁 نقاط *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *لقد خسرت*\n\n‣ أنت : ${text}\n‣ الوكارد : ${astro}\n\nنقاط *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <حجرة/ورقة/مقص>']
handler.tags = ['game']
handler.command = ['لعبة'] 
handler.register = false

export default handler
