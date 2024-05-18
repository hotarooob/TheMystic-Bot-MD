const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*[🦇] اعمل منشن او ريبلاي علي الرساله*\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*[🦇] المستخدم عنده 0 تحذير*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*';

  user.warn -= 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*@${who.split`@`[0]}*`} تم حذف التحذير\n*التحذيرات${user.warn}/3*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
  `, null, {mentions: [who]});
};
handler.command = /^(رفع-انذار|حذف-انذار|حذف-التحذير|الغاء-التحذير|delwarning)$/i;
handler.group = true;
handler.admin = true
handler.botAdmin = true;
export default handler;
