const handler = async (m, {conn, text}) => {
  if (!text) throw '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*اعتذر سيدي نسيت تمنشن شخص*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*اعتذر سيدي نسيت تمنشن شخص*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*تم فك البان يقدر يستخدمني الان*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^الغاء-بان|فك-بان$/i;
handler.rowner = true;
export default handler;
