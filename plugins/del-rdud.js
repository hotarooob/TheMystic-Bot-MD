// دالة لحذف رد معين
async function deleteResponse(chatId, keyword) {
    if (!global.db.data.responses || !global.db.data.responses[chatId]) {
        throw '❌ لا يوجد رد مخزن لهذه المجموعة!';
    }

    let found = false;
    // البحث عن الكلمة المفتاحية بين الردود المخزنة
    for (let key in global.db.data.responses[chatId]) {
        if (key.toLowerCase() === keyword.toLowerCase()) {
            delete global.db.data.responses[chatId][key];
            found = true;
            break; // توقف البحث بمجرد العثور على الكلمة المفتاحية
        }
    }

    if (!found) {
        throw '❌ لا يوجد رد مخزن للجملة المفتاحية!';
    }

    // حفظ التغييرات في قاعدة البيانات
    // يمكن استخدام وظائف قاعدة البيانات المتاحة هنا
}

// تعديل الأمر لحذف رد معين
let deleteResponseGame = async (m, { conn, args }) => {
    // التحقق من وجود الأرقام الصحيحة من الوسائط
    if (args.length === 0) {
        throw '❗ يجب استخدام الأمر على النحو التالي: حذف-رد [الجملة المفتاحية]';
    }

    let keyword = args.join(' ').trim().toLowerCase(); // الجملة المفتاحية

    // حذف الرد من قاعدة البيانات باستخدام معرف المجموعة (chatId)
    await deleteResponse(m.chat, keyword);

    return conn.reply(m.chat, `✅ تم حذف الرد بنجاح!`, m);
}

deleteResponseGame.command = 'حذف-رد';
deleteResponseGame.tags = ['game'];
deleteResponseGame.help = ['حذف-رد [الجملة المفتاحية]'];
deleteResponseGame.admin = true;
export default deleteResponseGame;
