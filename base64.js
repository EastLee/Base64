var base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var str = "a:aaaa";

var binary = '';

for (var i = 0; i < str.length; i++) {
    var binStr = str.charCodeAt(i).toString(2);
    var n = 8 - binStr.length;
    if (n != 0) {
        for (var j = 0; j < n; j++) {
            binStr = "0" + binStr;
        }
    }
    binary = binary + binStr;
}

var preLen = binary.length;
var _len = 0;
if (preLen % 24 != 0) {
    _len = 24 - preLen % 24;
}
for (var m = 0; m < _len; m++) {
    binary = binary + 'x';
}
var bLen = binary.length / 6;
var base64Str = '';
for (var _i = 0; _i < bLen; _i++) {
    var _str = binary.substr(_i * 6, 6);
    if (_str.indexOf("x") == 0) {
        base64Str = base64Str + "=";
        continue;
    } else if (_str.indexOf("x") > 0) {
        _str = _str.replace(/x/g, "0");
        console.info(_str);
    }
    base64Str = base64Str + base[parseInt(_str, 2)];
}

console.info(base64Str);
