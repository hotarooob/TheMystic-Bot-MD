let handler = async (m, { conn, command, text }) => {
  let user = m.sender;
  let truly = `*•━━━•🦇𝐴𝐿𝑈𝐶𝐴𝑅𝐷🦇•━━━•*

   *_خلف كل مبدع داعم محبّ_*
   *_ونحن هنا لدعمكم_*

*•━━━•🦇𝐴𝐿𝑈𝐶𝐴𝑅𝐷🦇•━━━•*

*قروب المطور {بوت الوكارد}*

> *هنا: https://chat.whatsapp.com/CMWfKZxoerrGQR5irHsY03*

*•━━━•🦇𝐴𝐿𝑈𝐶𝐴𝑅𝐷🦇•━━━•*

*قناه الوكارد،،، اهم ميزاتنا:*

*•توزيع ارقام وهميه🔥•*
*•نشر وتعليم اكواد برمجيه🔥•*
*•نشر مواقع وبوتات واتساب مطوره🔥•*

*الـــرابـــط 👇*

> *هنا: https://whatsapp.com/channel/0029VacMpFgK0IBiEKnVJJ2W*

*•━━━•🦇𝐴𝐿𝑈𝐶𝐴𝑅𝐷🦇•━━━•*`.trim();
  m.reply(truly, null, { mentions: [user] });
};

handler.help = ['tagged'];
handler.tags = ['fun'];
handler.command = /^(الدعم)$/i;

export default handler;
