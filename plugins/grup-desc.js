const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*تـم تـنـفـيـذ الامـر*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^تغييرالوصف|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
