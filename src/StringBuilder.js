/**
 * Created by JerryChen on 2017/1/4.
 */
function StringBuilder() {
    this._string = new Array();
};
StringBuilder.prototype.append = function (str) {
    this._string.push(str);
    return this;
};
StringBuilder.prototype.appendLine = function (str) {
    this._string.push(str + "\n");
    return this;
};
StringBuilder.prototype.appendFormat = function (value) {
    for (var i = 1; i < arguments.length; i++) {
        var placeHolder = "\\{" + (i - 1) + "\\}";
        var reg = new RegExp(placeHolder, "g");
        value = value.replace(reg, arguments[i]);
    }
    this._string.push(value);
    return this;
};
StringBuilder.prototype.toString = function () {
    return this._string.join("");
}

