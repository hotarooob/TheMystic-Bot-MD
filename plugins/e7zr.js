let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*لم يتم الاجابة على السؤال بعد*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Melxnskm/A17/main/Media-Database/MedoGuess.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*

*السـؤال⇜『من في الصورة』*

*الـوقـت↞ ${(timeout / 1000).toFixed(2)}*

*الـجـائزة💰↞ ${poin} نقاط*

*استخدم .انسحب للأنسحاب*

*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                conn.reply(m.chat, `*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*↞انتهى وقت الاجابة*\n\n*↞الاجابة ${json.name}*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`, conn.tebakbendera[id][0])
                delete conn.tebakbendera[id]
            }
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^احزر$/i

export default handler 
