	var demo = angular.module("demo", []);

	demo.controller("mainController", ["$scope", function($scope){
		$scope.name = "World"

		$scope.print = function(){
			console.log($scope.name);
		};
	}]);