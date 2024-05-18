// دالة لحذف جميع الردود
async function deleteAllResponses(chatId) {
    if (!global.db.data.responses || !global.db.data.responses[chatId]) {
        throw '❌ لا توجد ردود مخزنة لحذفها!';
    }
    delete global.db.data.responses[chatId];
    // حفظ التغييرات في قاعدة البيانات
    // يمكن استخدام وظائف قاعدة البيانات المتاحة هنا
}

// تعديل الأمر لحذف جميع الردود
let deleteAllResponsesCommand = async (m, { conn }) => {
    // حذف جميع الردود باستخدام معرف المجموعة (chatId)
    await deleteAllResponses(m.chat);

    return conn.reply(m.chat, `✅ تم حذف جميع الردود بنجاح!`, m);
}

deleteAllResponsesCommand.command = 'حذف-الردود';
deleteAllResponsesCommand.tags = ['game'];
deleteAllResponsesCommand.help = ['حذف-الردود'];
deleteAllResponsesCommand.admin = true;
export default deleteAllResponsesCommand;
