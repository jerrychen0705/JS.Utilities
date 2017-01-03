/**
 * Created by JerryChen on 2016/12/30.
 */
var dateTimeUtils = {};
(function (object) {
    object.now = function () {
        return new Date();
    };
    object.toString = function (value, format) {
        var returnValue = '';
        var placeHolder = '00';
        var separator = '';
        var formatArray = ['y', 'M', 'd', 'h', 'm', 's'];
        var yearFormat = format.match(/y+/g);
        var formatLength = 0;
        var isContains = false;
        if (yearFormat != null && yearFormat[0].length <= 4) {
            formatLength += yearFormat[0].length;
            var yearValue = value.getFullYear().toString();
            separator = format.substr(formatLength, 1);
            isContains = contains(formatArray, separator);
            if (isContains) {
                separator = "";
            } else {
                formatLength += 1;
            }
            returnValue += yearValue.substr(4 - yearFormat[0].length, yearFormat[0].length) + separator;
        }
        var monthFormat = format.match(/M+/g);
        if (monthFormat != null && monthFormat[0].length <= 2) {
            formatLength += monthFormat[0].length;
            var monthValue = (value.getMonth() + 1).toString();
            separator = format.substr(formatLength, 1);
            isContains = inArray(formatArray, separator);
            if (isContains) {
                separator = "";
            } else {
                formatLength += 1;
            }
            returnValue += placeHolder.substr(0, 2 - monthFormat[0].length) + monthValue + separator;
        }
        var dayFormat = format.match(/d+/g);
        if (dayFormat != null && dayFormat[0].length <= 2) {
            formatLength += dayFormat[0].length;
            var dayValue = value.getDate().toString();
            separator = format.substr(formatLength, 1);
            isContains = inArray(formatArray, separator);
            if (isContains) {
                separator = " ";
            } else {
                formatLength += 1;
            }
            returnValue += placeHolder.substr(0, 2 - dayFormat[0].length) + dayValue + separator;
        }
        var hourFormat = format.match(/h+/g);
        if (hourFormat != null && hourFormat[0].length <= 2) {
            formatLength += hourFormat[0].length;
            var hourValue = value.getHours().toString();
            separator = format.substr(formatLength, 1);
            isContains = inArray(formatArray, separator);
            if (isContains) {
                separator = "";
            } else {
                formatLength += 1;
            }
            returnValue += placeHolder.substr(0, 2 - hourFormat[0].length) + hourValue + separator;
        }
        var minutesFormat = format.match(/m+/g);
        if (minutesFormat != null && minutesFormat[0].length <= 2) {
            formatLength += minutesFormat[0].length;
            var minutesValue = value.getMinutes().toString();
            separator = format.substr(formatLength, 1);
            isContains = inArray(formatArray, separator);
            if (isContains) {
                separator = "";
            } else {
                formatLength += 1;
            }
            returnValue += placeHolder.substr(0, 2 - minutesFormat[0].length) + minutesValue + separator;
        }
        secondsFormat = format.match(/s+/g);
        if (secondsFormat != null && secondsFormat[0].length <= 2) {
            var secondsValue = value.getSeconds();
            returnValue += placeHolder.substr(0, 2 - secondsFormat[0].length) + secondsValue;
        }
        return returnValue;
    };
    function inArray(array, targetValue) {
        var flag = false;
        $.each(array, function (index, item) {
            if (targetValue == item) {
                flag = true;
            }
        });
        return flag;
    }

    object.dateDiff = function (startDate, endDate, format) {
        if (format == "dd") {
           return (endDate.getTime()-startDate.getTime())/86400000;
        } else if (format == "hh") {
            return Math.ceil((endDate.getTime()-startDate.getTime())/3600000);
        } else if (format == "mm") {
            return Math.ceil((endDate.getTime()-startDate.getTime())/60000);
        } else if (format == "ss") {
            return Math.ceil((endDate.getTime()-startDate.getTime())/1000);
        }
    };
    object.addDays = function (value, days) {
        return new Date(value.getTime() + days * 86400000);
    };
    object.addHours = function (value, hours) {
        return new Date(value.getTime() + hours * 3600000);
    };
    object.addMinutes = function (value, minutes) {
        return new Date(value.getTime() + minutes * 60000);
    };
    object.addSeconds = function (value, seconds) {
        return new Date(value.getTime() + seconds * 1000);
    };
})(dateTimeUtils);
