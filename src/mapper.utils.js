/**
 * Created by JerryChen on 2016/12/31.
 */
var mapperUtils={};
(function (object) {
    object.toModel=function (sourceModel,targetModel) {
           for(key in targetModel){
               if(sourceModel[key]!=undefined){
                   targetModel[key]=sourceModel[key];
               }
           }
           return targetModel;
    };
    object.toList=function (dataSource,dataTarget) {
        $.extend(true,dataTarget,dataSource);
        return dataTarget;
    };
})(mapperUtils);
