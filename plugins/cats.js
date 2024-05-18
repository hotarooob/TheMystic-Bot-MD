import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  const ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text();
  const nek = ne.split('\n');
  const قطط = await nek[Math.floor(Math.random() * nek.length)];
  if (قطط == '') throw 'Error';
  conn.sendFile(m.chat, قطط, 'error.jpg', ` ميااو🐾💗`, m);
};
// conn.sendButton(m.chat, ميااو🐾💗', wm, قطط, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]],m)}
handler.command = /^(قطط)$/i;
handler.tags = ['anime'];
handler.help = ['قطط'];
export default handler;
