const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*تـم حـظـر هـذه الـمـجـمـوعـه مـن اسـتـخـدام الـبـوت*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^بان-شات$/i;
handler.admin = true;
handler.group = true;
export default handler;
