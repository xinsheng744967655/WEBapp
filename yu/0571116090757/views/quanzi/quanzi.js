/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("quanzictrl",function($scope,$stateParams){
    $scope.message="这是在控制器中定义的变量内容";

    var id=$stateParams.id;
    var title=$stateParams.title;
    console.log("id:"+id+",title:"+title)
})