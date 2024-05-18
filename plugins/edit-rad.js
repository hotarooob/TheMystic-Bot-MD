// دالة لتعديل رد معين
async function editResponse(chatId, keyword, newResponse) {
    if (!global.db.data.responses || !global.db.data.responses[chatId] || !global.db.data.responses[chatId][keyword]) {
        throw '❌ لا يوجد رد مخزن لهذه الكلمة المفتاحية!';
    }
    global.db.data.responses[chatId][keyword][0] = newResponse;
    // حفظ التغييرات في قاعدة البيانات
    // يمكن استخدام وظائف قاعدة البيانات المتاحة هنا
}

// تعديل الأمر لتعديل رد معين
let editResponseCommand = async (m, { conn, args }) => {
    // التحقق من وجود الأرقام الصحيحة من الوسائط
    if (args.length < 2) {
        throw '❗ يجب استخدام الأمر على النحو التالي: تعديل-رد [الكلمة المفتاحية] - [الرد الجديد]';
    }

    // فصل الكلمة المفتاحية والرد الجديد باستخدام الفاصلة ( - )
    let [keyword, newResponse] = args.join(' ').split(' - ');
    keyword = keyword.toLowerCase().trim(); // كلمة المفتاح بالحروف الصغيرة

    // تعديل الرد في قاعدة البيانات باستخدام معرف المجموعة (chatId)
    await editResponse(m.chat, keyword, newResponse.trim());

    return conn.reply(m.chat, `✅ تم تعديل الرد بنجاح!`, m);
}

editResponseCommand.command = 'تعديل-رد';
editResponseCommand.tags = ['game'];
editResponseCommand.help = ['تعديل-رد [الكلمة المفتاحية] - [الرد الجديد]'];
editResponseCommand.admin = true
export default editResponseCommand;
