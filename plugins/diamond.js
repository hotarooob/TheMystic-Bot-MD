
let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*المستخدم مفقود من قاعدة البيانات الخاصة بي*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`
    conn.reply(m.chat, `
*❆━━━═⏣⊰🦇⊱⏣═━━━❆*

🦇 *📌الاسم* : _@${who.split('@')[0]}_

🦇 *عدد الماسك 💎* : _${user.diamond}_

🦇 *اكسبي* : _المجموع ${user.exp}_

*❆━━━═⏣⊰🦇⊱⏣═━━━❆*

*ملحوظه :* 
يمكنك شراء 💎 الماس باستخدام الطلبات
🦇 *${usedPrefix}buy <cantidad>*
🦇 *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['شراء-الماس', 'الماسي', 'diamond', 'الماس'] 

export default handler
