const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);
  const caption = `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
  
〔 قائمة المبندين〕

 الرقم : ${users.length} ${users ?  '\n' + users.map(([jid], i) => `
 ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
 
*❆━━━═⏣⊰🦇⊱⏣═━━━❆*

〔 المحظورين شات〕

 الرقم : ${chats.length} ${chats ? '\n' + chats.map(([jid], i) => `
 ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '├'}
 
*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.command = /^banlist(ned)?|ban(ned)?list|المبندين$/i;
handler.rowner = true;
export default handler;
