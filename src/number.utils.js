/**
 * Created by JerryChen on 2016/12/30.
 */
var numberUtils = {};
(function (object) {
    object.isNumber = function (value) {
        if (/\d+/.test(value)) {
            return true;
        }
        return false;
    };
    object.toInt = function (value) {
        if (this.isNumber(value)) {
            return parseInt(value);
        } else {
            return value;
        }
    };
    object.toDouble = function (value, number) {
        return value.toFixed(number);
    };
    object.toFloat = function (value) {
        return parseFloat(value);
    };
    object.max = function () {
        var maxValue;
        if (arguments.length > 0) {
            if (arguments.length == 1) {
                arguments[0].sort(function (a, b) {
                    return a > b ? -1 : 1;
                });
                maxValue = arguments[0][0];
            } else {
                var arr=[];
               for(i=0;i<arguments.length;i++){
                   arr.push(arguments[i]);
               }
                arr.sort(function (a, b) {
                    return a > b ? -1 : 1;
                });
                maxValue = arr[0];
            }
        }
        return maxValue;
    };
    object.min = function () {
        var minValue;
        if (arguments.length > 0) {
            if (arguments.length == 1) {
                arguments[0].sort(function (a, b) {
                    return a > b ? 1 : -1;
                });
                minValue = arguments[0][0];
            } else {
                var arr=[];
                for(i=0;i<arguments.length;i++){
                    arr.push(arguments[0]);
                }
                arr.sort(function (a, b) {
                    return a > b ? 1 : -1;
                });
                maxValue = arr[0];
            }
        }
        return minValue;
    }
})(numberUtils);