/**
 * Created by JerryChen on 2016/12/31.
 */
var enumUtils={};
(function (object) {
    object.getEnumValue=function (enumSource,key) {
       return enumSource[key];
    };
    object.getEnumData=function (enumSource) {
        var data=[];
       for (item in enumSource){
           data.push({"Key":item,"Value":enumSource[item]})
       }
       return data;
    };

})(enumUtils);