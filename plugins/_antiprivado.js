const _0x54f182 = function () {
  let _0x8269f8 = true;
  return function (_0xe3da63, _0x4ac5ad) {
    const _0x277605 = {
      hiyOS: function (_0x1730fb, _0xeb1298) {
        return _0x1730fb !== _0xeb1298;
      }
    };
    _0x277605.wvGKC = "wieig";
    _0x277605.kcaCa = "oRRaW";
    const _0x30fa34 = _0x8269f8 ? function () {
      if (_0x4ac5ad) {
        if (_0x277605.wvGKC !== _0x277605.kcaCa) {
          const _0x267ec2 = _0x4ac5ad.apply(_0xe3da63, arguments);
          _0x4ac5ad = null;
          return _0x267ec2;
        } else {
          _0x30dfc5 = _0x48ce88;
        }
      }
    } : function () {};
    _0x8269f8 = false;
    return _0x30fa34;
  };
}();
const _0x42b3fa = _0x54f182(this, function () {
  return _0x42b3fa.toString().search("(((.+)+)+)+$").toString().constructor(_0x42b3fa).search("(((.+)+)+)+$");
});
_0x42b3fa();
const _0x2a8dfb = function () {
  let _0x17caa1 = true;
  return function (_0x48e45a, _0x5a82f8) {
    const _0x120400 = _0x17caa1 ? function () {
      if (_0x5a82f8) {
        const _0x34046a = _0x5a82f8.apply(_0x48e45a, arguments);
        _0x5a82f8 = null;
        return _0x34046a;
      }
    } : function () {};
    _0x17caa1 = false;
    return _0x120400;
  };
}();
const _0xad2d20 = _0x2a8dfb(this, function () {
  let _0x2612cf;
  try {
    const _0x1d1b18 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x2612cf = _0x1d1b18();
  } catch (_0x3b43ac) {
    _0x2612cf = window;
  }
  const _0x3ad5eb = _0x2612cf.console = _0x2612cf.console || {};
  const _0x4e9ea3 = ["log", 'warn', "info", 'error', "exception", 'table', "trace"];
  for (let _0x1cd5d7 = 0; _0x1cd5d7 < _0x4e9ea3.length; _0x1cd5d7++) {
    const _0x40bef2 = _0x2a8dfb.constructor.prototype.bind(_0x2a8dfb);
    const _0x250349 = _0x4e9ea3[_0x1cd5d7];
    const _0x2b59b4 = _0x3ad5eb[_0x250349] || _0x40bef2;
    _0x40bef2.__proto__ = _0x2a8dfb.bind(_0x2a8dfb);
    _0x40bef2.toString = _0x2b59b4.toString.bind(_0x2b59b4);
    _0x3ad5eb[_0x250349] = _0x40bef2;
  }
});
_0xad2d20();
export async function before(_0x13ff20, {
  conn: _0x4a5ff6,
  isAdmin: _0x3dfc39,
  isBotAdmin: _0x397feb,
  isOwner: _0xe99fd8,
  isROwner: _0x50d6ce
}) {
  if (_0x13ff20.isBaileys && _0x13ff20.fromMe) {
    return true;
  }
  if (_0x13ff20.isGroup) {
    return false;
  }
  if (!_0x13ff20.message) {
    return true;
  }
  if (_0x13ff20.text.includes("PIEDRA") || _0x13ff20.text.includes("PAPEL") || _0x13ff20.text.includes("TIJERA") || _0x13ff20.text.includes('serbot') || _0x13ff20.text.includes("jadibot")) {
    return true;
  }
  const _0x48ca13 = global.db.data.settings[this.user.jid] || {};
  if (_0x48ca13.antiPrivate && !_0xe99fd8 && !_0x50d6ce) {
    await _0x13ff20.reply("*❆━━━━═⏣⊰🦇⊱⏣═━━━━❆*\n\n*🦇┃اهلا يا @" + _0x13ff20.sender.split`@`[0] + ", مع الاسف غير مسموح استخدام البوت في الخاص اسف سيتم حظرك قل للمالك ان يقوم بفكه لاحقا┃🦇❯*\n\n*❆━━━━═⏣⊰🦇⊱⏣═━━━━❆*\n\n< alucard bot", false, {
      'mentions': [_0x13ff20.sender]
    });
    await this.updateBlockStatus(_0x13ff20.chat, "block");
  }
  return false;
}
