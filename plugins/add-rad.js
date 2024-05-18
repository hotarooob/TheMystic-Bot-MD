// دالة لإضافة رد جديد
async function addResponse(chatId, keyword, response) {
    if (!global.db.data.responses) {
        global.db.data.responses = {};
    }
    if (!global.db.data.responses[chatId]) {
        global.db.data.responses[chatId] = {};
    }
    if (!global.db.data.responses[chatId][keyword]) {
        global.db.data.responses[chatId][keyword] = [];
    }
    global.db.data.responses[chatId][keyword].push(response);
    // حفظ التغييرات في قاعدة البيانات
    // يمكن استخدام وظائف قاعدة البيانات المتاحة هنا
}

// تعديل الأمر لإضافة رد جديد
let addResponseGame = async (m, { conn, args }) => {
    // التحقق من وجود الأرقام الصحيحة من الوسائط
    if (args.length < 2) {
        throw '❗ يجب استخدام الأمر على النحو التالي: اضف-رد [الكلمة المفتاحية] - [الرد]';
    }

    // الفصل بين الكلمة المفتاحية والرد
    let [keyword, response] = args.join(' ').split(' - ');
    keyword = keyword.toLowerCase().replace(/\s+/g, ' '); // تحويل الفراغات إلى _

    // إضافة الرد إلى قاعدة البيانات باستخدام معرف المجموعة (chatId)
    await addResponse(m.chat, keyword, response.trim());

    return conn.reply(m.chat, `✅ تمت إضافة الرد بنجاح!`, m);
}
addResponseGame.command = 'اضف-رد';
addResponseGame.tags = ['game'];
addResponseGame.admin = true;
addResponseGame.help = ['اضف-رد [الكلمة المفتاحية] - [الرد]'];

export default addResponseGame;
