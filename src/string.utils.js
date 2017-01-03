/**
 * Created by JerryChen on 2016/12/30.
 */
var stringUtils={};
(function (object) {
    object.subString=function (value,start,length) {
        return value.substr(start,length);
    };
    object.truncate=function (value,maxLength,suffix) {
        if(value!=undefined&&value.length>maxLength){
           value=value.substr(0,maxLength)+suffix;
        }
        return value;
    };
    object.length=function (value) {
        if(value!=undefined){
            return value.length;
        }else {
            return 0;
        }
    };
    object.endTrim=function (value) {
        if(value!=undefined){
            value=value.substr(0,value.length-1);
        }
        return value;
    };
    object.isNotNull=function (value) {
        return value!=undefined&&value!=null;
    };
    object.isNotNullOrEmpty=function (value) {
        return value!=undefined&&value!=null&&value!="";
    };
    object.isEqual=function (value,compareWith) {
        return value==compareWith;
    };
    object.indexOf=function (value,targetValue) {
        return value.indexOf(targetValue);
    }
})(stringUtils);





