let handler = async (m, { conn, args, groupMetadata }) => {
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   if (!(who in global.db.data.users)) throw `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*لم اعثر على هذا المستخدم في قاعدة بياناتي*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`
   let warn = global.db.data.users[who].warn
   let name = conn.getName(who)
   m.reply(`*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
   
 ⟣ *الانذارات*

 ⟣ *الاسم:* ${name} 
 
 ⟣ *عدد الانذارات:* ${warn}
 
 *❆━━━═⏣⊰🦇⊱⏣═━━━❆*`)
 }

 handler.help = ['warns']
 handler.tags = ['group']
 handler.command = ['warns','الانذارات'] 
 handler.group = true
 handler.admin = true

 export default handler
