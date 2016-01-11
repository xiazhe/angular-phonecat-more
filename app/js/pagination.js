/**
 * Created by lucker.xia on 12/16/2015.
 * 分页测试
 * 当第一次从API 获取的数据被使用完时, 如何获取新的数据. 数据段设定
 *
 */
phonecatApp.controller('paginationController', ['$scope', 'paginationService', function($scope, paginationService){
    //pagination init data
    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.maxSize = 10;
    $scope.pageSize = 10;
    var firstLoad = true;
    var firstLoadData = null;
    var maxLoadCount = 1000;

    $scope.logs = "";
    $scope.list = [];
    $scope.postData = {
        "offset": 0,
        "limit": 10,
        "entity":{
            name: "",
            type: ""
        }
    };

    var init = function () {
        getList();
    };

    var getList = function () {
        paginationService.getList().then(function (data) {
            $scope.list = data.result.list;

            $scope.totalItems = data.result.totalCount;

            $scope.listFiltered = $scope.list.slice(0, $scope.pageSize);

        }, function (error) {
            
        });
    };

    /*分页 页码更改*/
    $scope.pageChanged = function () {
        var begin = (($scope.currentPage - 1) * $scope.pageSize)
            , end = begin + $scope.pageSize;

        //$scope.logs += "begin: ((当前页"+$scope.currentPage+" - 1) * pageSize) " + begin;
        //$scope.logs += "end: " + end;
        //examples: offset 0, limit:100        begin 100,  end 110

        console.log(begin, end);

        if(begin > postData.offset || end > postData.limit){
            $scope.postData.offset = begin;
            $scope.postData.limit = end;

            getList();

        }else{
            $scope.listFiltered = $scope.list.slice(begin, end);
        }



    };

    init();


    $scope.totalItemsTwo = 100;
    $scope.currentPageTwo = 1;
    
    $scope.pageChangedTwo = function () {
        console.log($scope.currentPageTwo);
    }


}]);