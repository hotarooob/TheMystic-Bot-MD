import mongoose from "mongoose";
const uri = "mongodb+srv://itachimadarasss3:ZLd5ZurlBMnoL9WW@cluster0.3xj0toz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(err => console.error("Error connecting to MongoDB:", err));
const madaraSchema = new mongoose.Schema({
    groupId: String,
    userId: String,
    madara: String
});
const madara = mongoose.model("madara", madaraSchema);
let handler = async function (msg, {
    conn: _,
    text,
    command,
    isAdmin
}) {
    try {
        if (command === "الالقاب") {
            if (!msg.isGroup) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمجموعات فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            if (!isAdmin) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمشرفين فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            const data = await madara.find({
                groupId: msg.chat
            });
            if (data.length === 0) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*لا يوجد القاب مسجلة بعد*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            } else {
                let list = "";
                data.forEach((item, index) => {
                    list += index + 1 + " - " + item.madara + "\n";
                });
                msg.reply("*🦇┃عـدد الـمـسـجـلـيـن" + data.length + "┃🦇 ❯*\n *🦇استخدم .لقب ثم لقب اكتب اللقب لمعرفه رقم صاحبه🦇*\n\n*🦇الألـقـاب الـمـسـجـلـة:*\n\n" + list + "\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            }
        } else if (command === "حفظ") {
            if (!msg.isGroup) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمجموعات فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            if (!isAdmin) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمشرفين فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            if (!msg.mentionedJid || !text || text.trim() === "") {
                msg.reply(`*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
                
*🦇اسـتـخـدام خـاطـئ🦇*

*『حـط الامـر مـع مـنـشـن شـخـص مـع الـلـقب』*

*مـثـال ↞.تسجيل @العضو الوكارد*

*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`);
                return;
            }

            const mentionedUser = msg.mentionedJid[0].replace("@s.whatsapp.net", "");
            const nicknames = text.trim().split(" ").slice(1).filter(item => item.trim() !== "");
            const nickname = nicknames.join(" ");
            if (!/\S/.test(nickname)) {
                msg.reply(`*❆━━━═⏣⊰🦇⊱⏣═━━━❆*
                
*🦇اسـتـخـدام خـاطـئ🦇*

*『حـط الامـر مـع مـنـشـن شـخـص مـع الـلـقب』*

*مـثـال ↞.تسجيل @العضو الوكارد*

*❆━━━═⏣⊰🦇⊱⏣═━━━❆*`);
                return;
            }

            const existingNickname = await madara.findOne({
                madara: nickname,
                groupId: msg.chat
            });
            if (existingNickname) {
                const takenBy = await _.getName(existingNickname.userId + "@s.whatsapp.net");
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇الـلـقـب* " + nickname + "*مـأخـوذ بـواسـطـة :*" + takenBy);
            } else {
                await madara.findOneAndUpdate({
                    userId: mentionedUser,
                    groupId: msg.chat
                }, {
                    madara: nickname
                }, {
                    upsert: true
                });
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇تـم تـسـجـيـلـه بـلـقـب* " + nickname + " *بـنـجـاح ✅*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            }
        } else if (command === "حذف_لقب") {
            if (!msg.isGroup) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمجموعات فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            if (!isAdmin) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*هذا الامر للمشرفين فقط*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            if (!text || text.trim() === "") {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇يـجـب كـتـابـة اسـم الـلـقـب جـنـب الأمـر لـحـذفـه🦇*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            const nicknameToDelete = text.trim();
            const deletedResult = await madara.deleteOne({
                madara: nicknameToDelete,
                groupId: msg.chat
            });
            if (deletedResult.deletedCount > 0) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇تـم حـذف لـقـب* " + nicknameToDelete + " *بـنـجـاح ✅*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            } else {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇الـلـقـب* " + nicknameToDelete + " *غـيـر مـأخـوذ أصـلاً*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            }
        } else if (command === "لقبي") {
            try {
                const senderId = msg.sender.split("@")[0];
                const userNickname = await madara.findOne({
                    userId: senderId,
                    groupId: msg.chat
                });
                if (userNickname && userNickname.madara) {
                    msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇لـقـبـك هـو :* " + userNickname.madara + "\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                } else {
                    msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇لـم يـتـم تـسـجـيـلـك أصـلاً*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                }
            } catch (error) {
                console.error("Error fetching user's nickname:", error);
                msg.reply("*🦇عـذرا.. هـنـاك خـطـئ🦇*");
            }
        } else if (command === "لقبه" && msg.mentionedJid) {
            if (!msg.mentionedJid || msg.mentionedJid.length === 0) {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇يـجـب كـتـابـة الأمـر وجـنـبـه مـنـشـن الـشـخـص الـمُـراد مـعـرفـة لـقـبـه🦇*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            const userToCheck = msg.mentionedJid[0].replace("@s.whatsapp.net", "");
            const userNickname = await madara.findOne({
                userId: userToCheck,
                groupId: msg.chat
            });
            if (userNickname) {
                const userNicknameText = await _.getName(userToCheck + "@s.whatsapp.net");
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇لـقـبـه هـو :* " + userNickname.madara + "\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            } else {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇لـم يـتـم تـسـجـيـلـه أصـلاً*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            }
        } else if (command === "لقب") {
            if (!text || text.trim() === "") {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇يـجـب كـتـابـة الأمـر وجـنـبـه الـلـقـب لـمـعـرفـة اذا كـان أحـدٌ قـد أخـذهُ أو لا🦇*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
                return;
            }
            const nicknameToCheck = text.trim();
            const nicknameData = await madara.findOne({
                madara: nicknameToCheck,
                groupId: msg.chat
            });
            if (nicknameData) {
                const userTakingTheNickname = await _.getName(nicknameData.userId.split("@")[0]);
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇الـلـقـب* " + nicknameToCheck + " *مـأخـوذ مـن:* " + userTakingTheNickname + "\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            } else {
                msg.reply("*❆━━━═⏣⊰🦇⊱⏣═━━━❆*\n\n*🦇الـلـقـب* " + nicknameToCheck + " *مـتـوفـر (غـيـر مـأخـوذ)*\n\n*❆━━━═⏣⊰🦇⊱⏣═━━━❆*");
            }
        } else {}
    } catch (err) {
        console.error("خطأ", err);
    }
};
handler.command = ["الالقاب", "حفظ", "لقبي", "لقبه", "حذف_لقب", "لقب"];
handler.tags = ["Madara"];
export default handler;
                          
