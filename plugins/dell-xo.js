import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '*[🦇] انت لست في غرفه*', wm, null, [['لبدا مباراه جديده اكتب', `${usedPrefix}اكس مباراه جديده`]], m);
  delete conn.game[room.id];
  await m.reply('*[ ✔ ] تم ازاله الغرفه*');
};
handler.command = /^(حذف-اللعبة|حذف-اللعبه)$/i;
handler.fail = null;
export default handler;
