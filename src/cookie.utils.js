/**
 * Created by JerryChen on 2016/12/31.
 */
var cookieUtils={};
(function (object) {
     object.setCookie=function (key,value,expires) {
         $.cookie(key, JSON.stringify(data), { expires: expires, path: '/' });
     };
     object.getCookie=function (key) {
         return $.cookie(key);
     };
    object.getServerCookie=function (cookieName,key) {
        var cookieValue = $.cookie(cookieName);
        var cookieItems = cookieValue.split('&');
        var itemValue = '';
        $.each(cookieItems, function (index, item) {
            if (item.indexOf(key) > -1) {
                itemValue = item.match(/=.*/g)[0].replace(/=/, '');
            }
        });
        return itemValue;
    };
     object.clearCookie=function (key,expires) {
         $.cookie(key, null, { expires: expires, path: '/' });
     };
})(cookieUtils);