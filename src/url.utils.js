/**
 * Created by JerryChen on 2016/12/31.
 */
var urlUtils={};
(function (object) {
    object.getParam= function (search,paramName) {
        var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
        var result = search.substr(1).match(reg);
        if (result != null) {
            return decodeURIComponent(result[2]);
        } else {
            return undefined;
        }
    };
    object.getHost=function () {
        return window.location.host;
    }
})(urlUtils);