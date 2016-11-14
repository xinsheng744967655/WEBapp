/**
 * Created by hxsd on 2016/9/28.
 */
angular.module("myapp").controller("shequctrl",function($scope){
    //准备预定数据 实际是从服务器端请求
    $scope.data={
        room:"3302",
        checkin:new Date(),
        checkout:new Date(Date.now()+7*24*60*60*1000),
        wifi:"hello890",
        price:268.00
    }
})