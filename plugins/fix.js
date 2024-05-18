import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: ' *❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت*\n\n *❆━━━═⏣⊰🦇⊱⏣═━━━❆*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './MysticSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '⌯لم يتم العثور على ملف يتضمن معرف الشات'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: ` *❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*تم حذف ${filesDeleted} من ملفات الجلسه*\n\n *❆━━━═⏣⊰🦇⊱⏣═━━━❆*`}, {quoted: m});
    }
  } catch (err) {
    console.error('*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*خطأ في قراءة مجلد الجلسة أو الملفات :*\n\n *❆━━━═⏣⊰🦇⊱⏣═━━━❆*', err);
    await conn.sendMessage(m.chat, {text: ' *❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*حدث خطأ أثناء حذف ملفات الجلسة*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: ` *❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*لو البوت مستجبش اعمل اسبام باي امر عشان جلسه الشات تنضاف*\n\n*مثال :* \n${usedPrefix}اوامر\n${usedPrefix}اوامر\n${usedPrefix}اوامر\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`}, {quoted: m});
};
handler.help = ['ALUCARD'];
handler.tags = ['ALUCARD'];
handler.command = /^(صلح|تصليح|تنظيف|نظف)$/i;
export default handler;
