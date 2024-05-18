const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/simpcard', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '*🦇بطاقتك الشخصية جاهزة🦇*', m);
};
handler.help = ['simpcard'];
handler.tags = ['maker'];
handler.command = /^(بطاقه|بطاقة)$/i;
export default handler;
