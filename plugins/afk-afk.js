//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
  let user = global.db.data.users[m.sender]
  user.afk = +new Date()
  user.afkReason = text
  m.reply(`*❆━━━━═⏣⊰🦇⊱⏣═━━━━❆*
  
😴 *وضع الاختفاء* 
تم تفعيل وضع الاختفاء

▢ *المستخدم:* ${conn.getName(m.sender)} 
▢ *السبب:* ${text ? text : ''}
*❆━━━━═⏣⊰🦇⊱⏣═━━━━❆*`)
}
handler.help = ['اختفاء <السبب>']
handler.tags = ['fun']
handler.command = ['اختفاء']
handler.group = true

export default handler
