const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'بدون سبب';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n *[🦇] قم بالرد علي رساله او منشن المستخدم*\n\n*🦇◉ مثال:*\n*${
    usedPrefix + command
  } @${global.suittag}* \n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`;
   if (!(who in global.db.data.users)) throw `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*قم بالرد علي رساله او منشن المستخدم [يجب ان يتواجد في قاعده البيانات]*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*@${who.split`@`[0]}*` : `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*@${who.split`@`[0]}*`
      } *لقد تلقيت تحذيرا في الجروب!*\n*السبب: ${sdms}*\n*التحذيرات ${
        user.warn
      }/3*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (bot.restrict) {
      return m.reply(
          '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*[🦇] المالك مفعلش الطرد كلمه عشان يفعلها*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*',
      );
    }
    user.warn = 0;
    await m.reply(
        `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*حذرتك مرات كثيرة!!*\n*@${
          who.split`@`[0]
        }* *لقد تجاوزت* *3* *التحذيرات، الان سيتم القضاء عليك/ي 👽* *❆━━━═⏣⊰🦇⊱⏣═━━━❆*`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|تحذير|انذار)$/i;
handler.admin = true
handler.group = true;
handler.botAdmin = true;
export default handler;
