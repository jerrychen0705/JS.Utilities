/**
 * Created by JerryChen on 2016/12/31.
 */
var jsonUtils={};
(function (object) {
    object.grepJsonArray=function (dataSource,filterRule) {
        //var defaultRule=[{"FilterField":"","Value":"","Operator":""}];
        if(filterRule!=undefined&&filterRule!=null&&filterRule.length>0){
            $.each(filterRule,function (index,item) {
                if (item.Operator=="="){
                    dataSource= $.grep(dataSource, function (item, index) {
                        return item.FilterField == item.Value;
                    }, false);
                }
                if (item.Operator=="!="){
                    dataSource= $.grep(dataSource, function (item, index) {
                        return item.FilterField != item.Value;
                    }, false);
                }
            });
        }
        return dataSource;
    };
    /**
     * @return {boolean}
     */
    object.isNotNullOrEmpty=function (dataSource) {
        return dataSource!=undefined&&dataSource!=null&&dataSource.length>0;

    };
    object.isNotEmptyObject=function (dataSource) {
        return !$.isEmptyObject(dataSource);
    };
    object.getObjectProperty=function (dataSource,propertyName) {
        return dataSource[propertyName];
    };
    object.removeObjectProperty=function (dataSource,propertyName) {
        delete dataSource[propertyName];
        return dataSource;
    }

})(jsonUtils);