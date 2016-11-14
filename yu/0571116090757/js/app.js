/**
 * Created by hxsd on 2016/9/28.
 */
var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tabs",{
        url:"/tabs",abstract:true,templateUrl:"views/tabs/tabs.html"})
        .state("tabs.home",{
           url:"/home",views:{"tab-home":{templateUrl:"views/home/home.html",controller:"mycory"}}
        }).state("tabs.me",{
            url:"/me",views:{"tab-me":{templateUrl:"views/me/me.html"}}
        }).state("tabs.shangcheng",{
            url:"/shangcheng",views:{"tab-shangcheng":{templateUrl:"views/shangcheng/shangcheng.html",controller:"mycory"}}
        }).state("tabs.shequ",{
            url:"/shequ",views:{"tab-shequ":{templateUrl:"views/shequ/shequ.html",controller:"mycory"}}
        }).state("tabs.quanzi",{
        url:"/quanzi?:id:title",views:{"tab-shequ":{templateUrl:"views/quanzi/quanzi.html",controller:"quanzictrl"}}
    })

    $urlRouterProvider.otherwise("/tabs/home")
});

//注册控制器
myapp.controller("mycory",function($scope,$http,$ionicScrollDelegate){
    $scope.products=[
        {title:"[花艺教学]",img:"images/20.jpg",images:"images/touxing.jpg",name:"花田小憩",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"2390",like:"786",yan:"69"},
        {title:"[园艺植物]",img:"images/26.jpg",images:"images/touxing.jpg",name:"氺希燕子",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"1596",like:"436",yan:"77"},
        {title:"[家居装饰]",img:"images/28.jpg",images:"images/touxing.jpg",name:"bigb冰冰",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"2377",like:"580",yan:"59"},
        {title:"[旧物改造]",img:"images/23.jpg",images:"images/touxing.jpg",name:"宁静圆圆",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"7690",like:"390",yan:"29"},
        {title:"[芳香料理]",img:"images/24.jpg",images:"images/touxing.jpg",name:"太太洋芋",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"520",like:"729",yan:"88"},
        {title:"[花间小事]",img:"images/25.jpg",images:"images/touxing.jpg",name:"可可悠″",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"2388",like:"711",yan:"19"},
        {title:"[跨界鉴赏]",img:"images/21.jpg",images:"images/touxing.jpg",name:"非常butt",inner:"幸福音色 | 水晶的花环",
            conten:"祝福的花环，圈绕住你我，一起聆听那幸福花开的声音。···",look:"992",like:"292",yan:"28"}

    ];
//商城
    $scope.shangpins=[
        {img:"images/shangpin1.jpg",eng:"EUCALYPTUS",name:"尤加利菓",ma:"￥98.00"},
        {img:"images/shangpin5.jpg",eng:"YOUKELILI",name:"幽克里",ma:"￥69.00"},
        {img:"images/shangpin3.jpg",eng:"YULANHUA",name:"花于蓝",ma:"￥79.00"},
        {img:"images/shangpin4.jpg",eng:"MATIHUA",name:"樱春憩",ma:"￥56.00"},
        {img:"images/shangpin2.jpg",eng:"XIANKELAN",name:"珂琪兰花",ma:"￥23.00"}


    ];
//社区精选
    $scope.jingxuans=[
        {img:"images/ww.jpg",eng:"小七",time:"6小时前",ma:"花开静谧慢吐芬芳，守护才慢慢酿成最沉默的相依相伴",pic:"images/flower1.jpg",name:"怀抱普罗修斯的幽香"},
        {img:"images/ee.jpg",eng:"甜田",time:"8小时前",ma:"守护才慢慢酿成最沉默的相依相伴",pic:"images/flower2.jpg",name:"埃菲尔铁塔"},
        {img:"images/qq.jpg",eng:"紫螺嚛",time:"13小时前",ma:"慢吐芬芳沉默的相依相伴",pic:"images/flower3.jpg",name:"猫的天空之城"}

    ];


    //响应上拉刷新事件
    $scope.loadMore= function () {
        //使用ajaX请求服务器端的商品数据
        $http.get("home.json")
            .success(function(data){
                //将返回的data追加到products数组上
                //下面的语法相当于在$scope.products上调用push（data）方法
                Array.prototype.push.apply($scope.products,data)
            })
            .finally(function(){
                //通知框架 上拉刷新事件
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
    }

    //商城
    $scope.loadMoreto= function () {
        //使用ajaX请求服务器端的商品数据
        $http.get("shangcheng.json")
            .success(function(data){
                //将返回的data追加到products数组上
                //下面的语法相当于在$scope.products上调用push（data）方法
                Array.prototype.push.apply($scope.shangpins,data)
            })
            .finally(function(){
                //通知框架 上拉刷新事件
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
    }

    //社区精选
    $scope.loadMoretoo= function () {
        //使用ajaX请求服务器端的商品数据
        $http.get("jingxuan.json")
            .success(function(data){
                //将返回的data追加到products数组上
                //下面的语法相当于在$scope.products上调用push（data）方法
                Array.prototype.push.apply($scope.jingxuans,data)
            })
            .finally(function(){
                //通知框架 上拉刷新事件
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
    }

    //滚动到顶部
    $scope.top=function(){
        $ionicScrollDelegate.scrollTop(true)
    }
})