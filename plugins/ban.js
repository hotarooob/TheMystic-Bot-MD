const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*اعتذر سيدي نسيت تمنشن شخص*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
    m.reply('*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*تم حظر المستخدم بنجاح سيدي*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*');
};
handler.command = /^بان/i;
handler.rowner = true;
export default handler;
