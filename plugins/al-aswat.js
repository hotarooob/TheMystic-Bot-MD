let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/بوت/.test(m.text) && chat.audios && !chat.isBanned) {
let vn = 'alucard-audio/انا لست بوتاً ايها ا.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!/\./.test(m.text) && /الوكارد/.test(m.text) && chat.audios && !chat.isBanned) {
let vn = 'alucard-audio/الوكارد.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
return !0 }
export default handler
