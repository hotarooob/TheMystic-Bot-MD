import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  if (!text) throw `*[❗] الإستفسار إلزامي (أرسل قائمة أوامر)*\n\n*—◉ المطور*\n*◉ ${usedPrefix + command}* معلومات بوت\n\n*—◉ قائمة الأوامر*\n*◉ ${ar1.map((v) => ' ' + v).join`\n*◉`}`;
  if (!ar1.includes(text)) return m.reply(`*[❗] الأمر غير موجود (أرسل أمرا يتوافق مع القائمة)*\n\n*==================================*\n\n*—◉ قائمة الأوامر*\n*◉ ${ar1.map((v) => ' ' + v).join`\n*◉`}`);
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};
handler.help = ['getplugin'].map((v) => v + ' *<الإسم>*');
handler.tags = ['owner'];
handler.command = /^(ملف)$/i;
handler.rowner = true;
export default handler;
