import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*أدخل الاسم الذي تريد أن يكون الاسم الجديد للمجموعه*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*عذرا هناك خطء*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(تغييرالاسم)$/i;
handler.group = true;
handler.admin = true;
export default handler;
